import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AccountModule } from './account/account.module';
import { UrlService } from './url/url.service';
import { UrlModule } from './url/url.module';
import { ShortUrlModule } from './short-url/short-url.module';
import { ShortUrlAccessModule } from './short-url-access/short-url-access.module';

@Module({
  imports: [PrismaModule, AccountModule, UrlModule, ShortUrlModule, ShortUrlAccessModule],
  controllers: [AppController],
  providers: [AppService, UrlService],
})
export class AppModule {}
