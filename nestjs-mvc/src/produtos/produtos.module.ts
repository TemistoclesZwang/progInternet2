import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { PrismaService } from '../database/prisma.service';
import { ProdutosRepository } from 'src/repositories/produtos-repository';
import { PrismaProdutos } from 'src/repositories/prisma/prisma-produtos-repository';


@Module({
  controllers: [ProdutosController],
  providers: [
    ProdutosService,
    PrismaService,
    {
      provide: ProdutosRepository,
      useClass: PrismaProdutos
    }
  ],
})
export class ProdutosModule {}
