import { readFile, writeFile } from 'fs/promises';

export async function updateSwagger(swaggerObj: unknown) {
  const swagger = JSON.stringify(swaggerObj, null, 2);

  try {
    const current = await readFile('./swagger.json', 'utf-8');

    if (current === swagger) {
      return;
    }
  } catch { }

  await writeFile('./swagger.json', swagger);
}
