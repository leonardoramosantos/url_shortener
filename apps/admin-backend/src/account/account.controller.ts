import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from '@leonardo_url_shortener/db-provisioner';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() account: Account) {
    return this.accountService.create(account);
  }

  @Get(':accountName')
  async findByAccountName(@Param('accountName') accountName: string) {
    return this.accountService.findByAccountName(accountName);
  }
}
