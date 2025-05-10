import { ShortUrl } from '@leonardo_url_shortener/db-provisioner';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ShortUrlService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(shortUrl: ShortUrl) {
    return this.prisma.shortUrl.create({
      data: shortUrl,
    });
  }

  async findBySlug(slug: string): Promise<ShortUrl | null> {
    return this.prisma.shortUrl.findUnique({
      where: { slug },
    });
  }
}
