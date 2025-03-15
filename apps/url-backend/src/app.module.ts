import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SlugResolverModule } from './slug-resolver/slug-resolver.module';
import { MemcachedModule } from '@andreafspeziale/nestjs-memcached';
import { SlugResolverService } from './slug-resolver/slug-resolver.service';

@Module({
  imports: [
    MemcachedModule.forRoot({
      connections: [{ host: 'localhost', port: 112 }],
      ttl: 60 * 60 * 24 * 2,
    }),
    PrismaModule,
    SlugResolverModule,
  ],
  controllers: [AppController],
  providers: [AppService, SlugResolverService],
})
export class AppModule {}
