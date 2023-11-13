import envSchema from 'env-schema';
import S from 'fluent-json-schema';
import path from 'path';

export type Env = {
  LOG_LEVEL: string;
  OUT_PATH: string;
  BASE_PATH: string;
  VERSION: string;
  PORT: number;
  HOST: string;
  APP_ENV: string;
  DATABASE_URL: string;

  ///////////////////
  // JWT_SECRET: string;
  // BKP_SECRET: string;
  // JWT_TOKEN_EXPIRES: number;
  // JWT_REFRESH_EXPIRES: number;
  // SENTRY_DSN: string;
  // PAGE_LIMIT: number;
  // PUBLIC_PATH: string;
  // ASSETS_PATH: string;
};

const schema = S.object<Env>()
  .prop('LOG_LEVEL', S.string().enum(['debug', 'info', 'warn', 'error', 'trace']).default('debug'))
  .prop('OUT_PATH', S.string().default(path.resolve(__dirname, '../../out')))
  .prop('BASE_PATH', S.string().default('/api'))
  .prop('VERSION', S.string().default('latest'))
  .prop('PORT', S.number().default(4000))
  .prop('HOST', S.string().default('0.0.0.0'))
  .prop('APP_ENV', S.string().default('local'))
  .prop('DATABASE_URL', S.string().required())
  ///////////////////////////
  // .prop('JWT_SECRET', S.string().required().minLength(64).maxLength(64))
  // .prop('BKP_SECRET', S.string().required().minLength(32).maxLength(32))
  // .prop('JWT_TOKEN_EXPIRES', S.number().default(60 * 60 * 24 /* 1 day */))
  // .prop('JWT_REFRESH_EXPIRES', S.number().default(60 * 60 * 24 * 7 /* 1 week */))
  // .prop('SENTRY_DSN', S.string().required())
  // .prop('PAGE_LIMIT', S.number().default(100))
  // .prop('PUBLIC_PATH', S.string().default(path.resolve(__dirname, '../../public')))
  // .prop('ASSETS_PATH', S.string().default(path.resolve(__dirname, '../../assets')))
  .valueOf();

export const Env = envSchema<Env>({
  dotenv: true,
  schema
});
