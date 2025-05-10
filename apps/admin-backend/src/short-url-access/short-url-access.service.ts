import { Injectable } from '@nestjs/common';
import { ShortUrlAccess } from '@leonardo_url_shortener/db-provisioner';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ShortUrlAccessService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(shortUrlAccess: ShortUrlAccess) {
    return this.prisma.shortUrlAccess.create({
      data: shortUrlAccess,
    });
  }

  async listAccessByIdAndDate(shortUrlId: number, date: string) {
    return this.prisma.shortUrlAccess.findMany({
      where: { shortUrlId, createdDate: date },
    });
  }
}
