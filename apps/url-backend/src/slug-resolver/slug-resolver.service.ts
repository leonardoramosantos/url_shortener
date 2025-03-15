import { MemcachedService } from '@andreafspeziale/nestjs-memcached';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SlugResolverService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly memcachedService: MemcachedService,
  ) {}

  async resolve(slug: string) {
    const shortUrl = await this.memcachedService.get<string>(slug);
    if (shortUrl === null) {
      return this.prisma.shortUrl
        .findUnique({
          where: { slug: slug },
        })
        .then((shortUrl) => {
          if (shortUrl) {
            this.memcachedService.set(slug, shortUrl.slug);
            return shortUrl.slug;
          }
        })
        .catch(() => {
          return null;
        });
    } else {
      return shortUrl;
    }
  }
}
