import { Body } from "@kitajs/runtime";
import { PRISMA } from "../../db/client";

interface CreateUser {
  /**
   * @minLength 3
   * @maxLength 100
   */
  name: string;
}

/**
 * @tag User
 * @operationId createUser
 */
export async function post(body: Body<CreateUser>) {
  return PRISMA.user.create({
    data: {
      name: body.name
    }
  });
}

