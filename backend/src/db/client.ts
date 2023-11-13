import { PrismaClient } from '@prisma/client';

import { Env } from '../util/env';
import { Log } from '../logger';

export const PRISMA = new PrismaClient({
  datasources: { db: { url: Env.DATABASE_URL } },
  errorFormat: 'minimal',
  log: [
    { emit: 'event', level: 'info' },
    { emit: 'event', level: 'warn' },
    { emit: 'event', level: 'error' }
  ]
});

const log = Log.child({ name: 'prisma' });

if (process.env.NODE_ENV !== 'test') {
  PRISMA.$on('info', (message) => log.info(message));
  PRISMA.$on('warn', (message) => log.warn(message));
  PRISMA.$on('error', (message) => log.error(message));
}
