import { Body } from "@kitajs/runtime";

interface CreateUser {
  /**
   * @minLength 3
   * @maxLength 100
   */
  name: string;
  /**
   * @maxLength 320
   * @format email
   */
  email: string;
  /**
   * @pattern ^[0-9]{11}$
   */
  document: string;
  /**
   * @minLength 8
   * @maxLength 20
   * @format password
   */
  password: string;
}

/**
 * @tag User
 * @operationId createUserAjv
 */
export async function post(body: Body<CreateUser>) {
  // ...rest

  return {
    status: 200,
    message: 'ok'
  };
}

