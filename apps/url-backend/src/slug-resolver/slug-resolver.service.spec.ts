import { Test, TestingModule } from '@nestjs/testing';
import { SlugResolverService } from './slug-resolver.service';

describe('SlugResolverService', () => {
  let service: SlugResolverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlugResolverService],
    }).compile();

    service = module.get<SlugResolverService>(SlugResolverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
