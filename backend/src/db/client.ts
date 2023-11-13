export * from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { Env } from '../util/env';
import { Log } from '../logger';

export let PRISMA: PrismaClient;

const prisma = new PrismaClient({
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
  prisma.$on('info', (message) => log.info(message));
  prisma.$on('warn', (message) => log.warn(message));
  prisma.$on('error', (message) => log.error(message));
}

PRISMA = prisma;
