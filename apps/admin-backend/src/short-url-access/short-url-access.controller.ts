import { Controller, Get } from '@nestjs/common';
import { ShortUrlAccessService } from './short-url-access.service';

@Controller('short-url-access')
export class ShortUrlAccessController {
  constructor(private readonly shortUrlAccessService: ShortUrlAccessService) {}

  @Get(':shortUrlId/:date')
  async listAccessByIdAndDate(shortUrlId: number, date: string) {
    return this.shortUrlAccessService.listAccessByIdAndDate(shortUrlId, date);
  }
}
