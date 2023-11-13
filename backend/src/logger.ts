import path from 'path';
import pino from 'pino';
import { Env } from './util/env';

let logger = pino({
  level: Env.LOG_LEVEL,

  name: 'Feed',

  transport: {
    targets: [
      {
        target: 'pino/file',
        options: {
          destination: path.resolve(Env.OUT_PATH, 'feed.log'),
          mkdir: true
        },
        level: 'trace'
      },
      {
        target: 'pino-pretty',
        level: Env.LOG_LEVEL,
        options: {}
      }
    ]
  }
});

for (const [key, value] of Object.entries(logger)) {
  typeof value === 'function' && (logger[key] = logger[key].bind(logger));
}

export const Log = logger;
