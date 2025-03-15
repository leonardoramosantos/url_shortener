import { Test, TestingModule } from '@nestjs/testing';
import { SlugResolverController } from './slug-resolver.controller';

describe('SlugResolverController', () => {
  let controller: SlugResolverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlugResolverController],
    }).compile();

    controller = module.get<SlugResolverController>(SlugResolverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
