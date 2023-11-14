import { PRISMA } from "../../db/client";

/**
 * @tag Barbecue
 * @operationId listBarbecue
 */
export async function get() {
  return PRISMA.barbecue.findMany({
    select: {
      id: true,
      date: true,
      description: true,
      address: true,
      attendees: {
        select: {
          fee: true,
        },
      },
    }
  });
}
