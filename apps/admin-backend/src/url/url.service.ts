import { Url } from '@leonardo_url_shortener/db-provisioner';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UrlService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(url: Url) {
    return this.prisma.url.create({
      data: url,
    });
  }

  async findById(id: number) {
    return this.prisma.url.findUnique({
      where: { id: id },
    });
  }

  async listUrlsByAccountId(accountId: number) {
    return this.prisma.url.findMany({
      where: { id: accountId },
    });
  }
}
