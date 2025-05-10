import { Module } from '@nestjs/common';
import { ShortUrlAccessService } from './short-url-access.service';
import { ShortUrlAccessController } from './short-url-access.controller';

@Module({
  providers: [ShortUrlAccessService],
  controllers: [ShortUrlAccessController]
})
export class ShortUrlAccessModule {}
