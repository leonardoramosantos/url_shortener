import { Body, Controller, Get, Post } from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { ShortUrl } from '@leonardo_url_shortener/db-provisioner';

@Controller('short-url')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Post()
  async create(@Body() shortUrl: ShortUrl) {
    return this.shortUrlService.create(shortUrl);
  }

  @Get(':slug')
  async findBySlug(@Body() slug: string) {
    return this.shortUrlService.findBySlug(slug);
  }
}
