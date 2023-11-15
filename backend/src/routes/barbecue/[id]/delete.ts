import { Body } from "@kitajs/runtime";
import { PRISMA } from "../../../db/client";

interface DeleteBarbecue {
  id: number;
}

/**
 * @tag Barbecue
 * @operationId deleteBarbecue
 */
export async function post(body: Body<DeleteBarbecue>) {
  return PRISMA.barbecue.delete({
    where: {
      id: body.id
    }
  });
}
