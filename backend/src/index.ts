globalThis.KITA_PROJECT_ROOT = __dirname;

import '@prisma/client';
import 'source-map-support/register';

import { isMainThread } from 'worker_threads';
import { PRISMA } from './db/client';
import { Log } from './logger';
import { Env } from './util/env';
import { updateSwagger } from './util/swagger';
import fastify from 'fastify';
import { ajvFilePlugin } from '@fastify/multipart';
import { Kita } from '@kitajs/runtime';

import closeWithGrace from 'close-with-grace';

if (!isMainThread) {
  throw new Error('You are trying to start the server outside the main thread. This is not allowed.');
}

const app = fastify({
  ignoreTrailingSlash: true,
  logger: Log.child({ name: 'fastify' }),
  requestIdLogLabel: 'name',
  ajv: {
    plugins: [ajvFilePlugin],
    customOptions: {
      removeAdditional: 'all',
      allowUnionTypes: true
    }
  },
  serializerOpts: {
    ajv: {
      removeAdditional: 'all',
      allowUnionTypes: true,
      strictNumbers: 'log'
    }
  }
});

app.register(Kita, {
  prefix: Env.BASE_PATH,
  fastifySwaggerUi: {
    routePrefix: Env.BASE_PATH,
    staticCSP: false
  },
  fastifySwagger: {
    openapi: {
      openapi: '3.1.0',
      info: {
        contact: {
          name: 'Backend',
          email: 'email@email.com.br'
        },
        title: 'Backend',
        version: Env.VERSION,
        description: 'A complete REST API',
        license: {
          name: 'LICENSED',
          identifier: 'LICENSED'
        }
      },
      servers: [{ url: `${Env.BASE_PATH}` }],
      components: {
        securitySchemes: {
          default: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
          }
        }
      }
    }
  }
});


const closeListeners = closeWithGrace({ delay: 500 }, async function ({ err }) {
  if (err) {
    app.log.error(err);
  }

  app.close();
});

app.addHook('onClose', async () => {
  closeListeners.uninstall();

  PRISMA.$disconnect();
});

app.addHook('onListen', async () => {
  PRISMA.$connect();
  app.log.info('Connected to prisma');
});

app.listen({ port: Env.PORT, host: Env.HOST }, async (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  if (Env.APP_ENV === 'local') {
    updateSwagger(app.swagger());
    app.log.info('Swagger updated');
  }
});
