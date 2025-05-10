import { Controller, Get } from '@nestjs/common';
import { SlugResolverService } from './slug-resolver.service';

@Controller('slug-resolver')
export class SlugResolverController {
  constructor(private readonly slugResolverService: SlugResolverService) {}

  @Get(':slug')
  async resolve(slug: string) {
    return this.slugResolverService.resolve(slug);
  }
}
