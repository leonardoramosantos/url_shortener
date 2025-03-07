import { Account } from "@leonardo_url_shortener/shared-models";
import { Account as PrismaAccount } from "@prisma/client";

export const mapPrismaAccountToDTO = (account: PrismaAccount): Account => ({
  id: account.id,
  accountName: account.accountName,
  createdDate: account.createdDate,
});
