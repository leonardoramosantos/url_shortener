import { Url } from "@leonardo_url_shortener/shared-models";
import { Url as PrismaUrl } from "@prisma/client";

export const mapPrismaUrlToDTO = (url: PrismaUrl): Url => ({
  id: url.id,
  accountId: url.accountId,
  url: url.url,
  createdDate: url.createdDate,
});
