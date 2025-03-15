import { Module } from '@nestjs/common';
import { SlugResolverService } from './slug-resolver.service';
import { SlugResolverController } from './slug-resolver.controller';

@Module({
  providers: [SlugResolverService],
  controllers: [SlugResolverController]
})
export class SlugResolverModule {}
