import fastify from 'fastify';
// import fastifyCors from '@fastify/cors';
// import fastifySwagger from '@fastify/swagger';
// import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifySensible from '@fastify/sensible';
import { ajvFilePlugin } from '@fastify/multipart';
// import fastifyMultipart from '@fastify/multipart';

import { Kita } from '@kitajs/runtime';

import { Log } from './logger';
import { Env } from './util/env';
// import path from 'path';
// import { readFile } from 'fs/promises';
// import { PrismaClient } from '#/db/client';
// import { extractToken, formatAuthUser } from '#/services/auth';
// import { Env } from '#/util/env';
// import fastifyJwt from '@fastify/jwt';
// import sentry from '@immobiliarelabs/fastify-sentry';
// import { Integrations } from '@sentry/node';

export async function createApp() {
  // export async function createApp(prisma: PrismaClient) {
  const app = fastify({
    ignoreTrailingSlash: true,
    logger: Log.child({ name: 'Fastify' }),
    disableRequestLogging: true,
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

  // await app.register(fastifyJwt, {
  //   secret: Env.JWT_SECRET,
  //   verify: { extractToken },
  //   formatUser: formatAuthUser
  // });

  // await app.register(fastifyMultipart, { prefix: Env.BASE_PATH, attachFieldsToBody: true });

  // app.register(fastifyCors, { prefix: Env.BASE_PATH });

  app.register(fastifySensible, { prefix: Env.BASE_PATH, sharedSchemaId: 'HttpError' });

  // app.register(fastifySwagger, {
  //   prefix: Env.BASE_PATH,
  //   mode: 'dynamic',
  //   openapi: {
  //     openapi: '3.1.0',
  //     info: {
  //       contact: {
  //         name: 'Fiber',
  //         email: 'email@email.com'
  //       },
  //       title: 'Fiber',
  //       version: Env.VERSION,
  //       description: 'A complete REST API',
  //       license: {
  //         name: 'LICENSED',
  //         identifier: 'LICENSED'
  //       }
  //     },
  //     servers: [{ url: `${Env.BASE_PATH}` }],
  //     components: {
  //       securitySchemes: {
  //         default: {
  //           type: 'apiKey',
  //           name: 'Authorization',
  //           in: 'header'
  //         }
  //       }
  //     }
  //   },

  //   refResolver: {
  //     buildLocalReference: (json: any, _: unknown, __: unknown, i: number) =>
  //       json.$id || json.$title || json.name || `def-${i}`
  //   }
  // });

  // app.register(fastifySwaggerUi, {
  //   routePrefix: Env.BASE_PATH
  // });

  app.register(Kita, { prefix: Env.BASE_PATH });

  return app;
}
