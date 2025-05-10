import { Url } from '@leonardo_url_shortener/db-provisioner';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}
  @Post()
  async create(@Body() url: Url) {
    return this.urlService.create(url);
  }

  @Get(':id')
  async findById(@Body() id: number) {
    return this.urlService.findById(id);
  }

  @Get('account/:accountId')
  async listUrlsByAccountId(@Body() accountId: number) {
    return this.urlService.listUrlsByAccountId(accountId);
  }
}
