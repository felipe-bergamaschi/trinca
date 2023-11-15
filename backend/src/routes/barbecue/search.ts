import { PRISMA } from "../../db/client";
import { Body } from "@kitajs/runtime";

interface SearchBarbecue {
  /**
   * @minLength 3
   * @maxLength 100
   */
  search: string;
}

/**
 * @tag Barbecue
 * @operationId searchBarbecue
 */
export async function post(body: Body<SearchBarbecue>) {
  return PRISMA.barbecue.findMany({
    where: {
      description: {
        contains: body.search,
      },
    },
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
    },
    orderBy: {
      date: "desc",
    }
  });
}
