import { Body } from "@kitajs/runtime";

interface CreateUser {
  /**
   * @minLength 3
   * @maxLength 100
   */
  name: string;
}

/**
 * @tag Test
 * @operationId test
 */
export async function post(body: Body<CreateUser>) {
  // ...rest

  return {
    status: 200,
    message: 'ok'
  };
}

