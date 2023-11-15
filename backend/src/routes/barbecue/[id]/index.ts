import { PRISMA } from "../../../db/client";
import { Path } from "@kitajs/runtime";

/**
 * @tag Barbecue
 * @operationId listBarbecueById
 */
export async function get(id: Path<number>) {
  return PRISMA.barbecue.findUnique({
    where: {
      id: id
    },
    include: {
      attendees: true
    }
  });
}
