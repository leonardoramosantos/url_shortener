import { Test, TestingModule } from '@nestjs/testing';
import { ShortUrlAccessController } from './short-url-access.controller';

describe('ShortUrlAccessController', () => {
  let controller: ShortUrlAccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortUrlAccessController],
    }).compile();

    controller = module.get<ShortUrlAccessController>(ShortUrlAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
