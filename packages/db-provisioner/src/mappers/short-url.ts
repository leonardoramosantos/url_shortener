import { ShortUrl } from "@leonardo_url_shortener/shared-models";
import { ShortUrl as PrismaShortUrl } from "@prisma/client";

export const mapPrismaShortUrlToDTO = (shortUrl: PrismaShortUrl): ShortUrl => ({
  id: shortUrl.id,
  accountUrlId: shortUrl.accountUrlId,
  slug: shortUrl.slug,
  createdDate: shortUrl.createdDate,
});
