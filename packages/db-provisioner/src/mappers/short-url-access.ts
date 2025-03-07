import { ShortUrlAccess } from "@leonardo_url_shortener/shared-models";
import { ShortUrlAccess as PrismaShortUrlAccess } from "@prisma/client";

export const mapPrismaShortUrlAccessToDTO = (
  shortUrlAccess: PrismaShortUrlAccess
): ShortUrlAccess => ({
  id: shortUrlAccess.id,
  shortUrlId: shortUrlAccess.shortUrlId,
  createdDate: shortUrlAccess.createdDate,
});
