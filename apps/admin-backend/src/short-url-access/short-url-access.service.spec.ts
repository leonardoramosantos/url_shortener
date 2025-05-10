import { Test, TestingModule } from '@nestjs/testing';
import { ShortUrlAccessService } from './short-url-access.service';

describe('ShortUrlAccessService', () => {
  let service: ShortUrlAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortUrlAccessService],
    }).compile();

    service = module.get<ShortUrlAccessService>(ShortUrlAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
