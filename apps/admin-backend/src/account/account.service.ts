import { Injectable } from '@nestjs/common';
import { Account } from '@leonardo_url_shortener/db-provisioner';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(account: Account) {
    return this.prisma.account.create({
      data: account,
    });
  }

  async findByAccountName(accountName: string): Promise<Account | null> {
    return this.prisma.account.findFirst({
      where: { accountName: accountName },
    });
  }
}
