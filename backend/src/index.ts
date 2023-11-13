// import 'prisma-client';
import 'source-map-support/register';

// import Sentry from '@sentry/node';
import { isMainThread } from 'worker_threads';
import { createApp } from './app';
// import { PRISMA } from './db/client';
import { Log } from './logger';
import { Env } from './util/env';
// import { updateSwagger } from './util/swagger';

if (!isMainThread) {
  throw new Error('You are trying to start the server outside the main thread. This is not allowed.');
}

async function main() {
  // await PRISMA.$connect();
  // Log.info('Connected to prisma');

  // const app = await createApp(PRISMA);
  const app = await createApp();
  Log.info('Created app');

  // app.addHook('onClose', async () => {
  //   await PRISMA.$disconnect();
  //   await Sentry?.close();
  // });

  await app.listen({ port: Env.PORT, host: Env.HOST });
  Log.warn(`Server running on http://localhost:${Env.PORT}${Env.BASE_PATH}`);

  // if (Env.FDM_ENV === 'local') {
  //   await updateSwagger(app.swagger());
  //   Log.info('Swagger updated');
  // }
}

main().catch(Log.error);
