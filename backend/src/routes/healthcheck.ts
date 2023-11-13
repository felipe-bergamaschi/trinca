// import { PRISMA } from '#/db/client';
// import { Env } from '#/util/env';

/**
 * @internal
 * @operationId healthCheck
 */
export async function get() {
  return {
    status: 'ok',
    // version: Env.FDM_VERSION,
    // environment: Env.FDM_ENV,
    // uptime: Math.floor(process.uptime()),
    // database: await PRISMA.$queryRaw`SELECT 1`.then(
    //   () => 'ok',
    //   () => 'error'
    // )
  };
}
