import { Body } from "@kitajs/runtime";
import { PRISMA } from "../../db/client";

interface CreateBarbecue {
  date: Date;
  /**
   * @minLength 3
   * @maxLength 100
   */
  address: string;
  /**
   * @minLength 3
   * @maxLength 100
   */
  description: string;
  attendees: {
    /**
     * @minLength 3
     * @maxLength 100
     */
    name: string;
    /**
     * @minLength 3
     * @maxLength 100
     */
    fee: number;
  }[];
}

/**
 * @tag Barbecue
 * @operationId createBarbecue
 */
export async function post(body: Body<CreateBarbecue>) {
  return PRISMA.barbecue.create({
    data: {
      date: body.date,
      address: body.address,
      description: body.description,
      attendees: {
        create: body.attendees
      }
    }
  });
}
