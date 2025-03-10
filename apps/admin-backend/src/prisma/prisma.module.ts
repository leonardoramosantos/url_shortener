import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AccountModule } from 'src/account/account.module';
import { PrismaClient } from '@prisma/client';

@Global()
@Module({
  providers: [{ provide: PrismaClient, useValue: new PrismaClient() }],
  exports: [PrismaClient],
})
export class PrismaModule {}
