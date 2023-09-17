import { Module } from '@nestjs/common';
import { PessoasService } from './pessoa.service';
import { PessoasController } from './pessoa.controller';
import { PrismaService } from '../database/prisma.service';
import { PessoasRepository } from 'src/repositories/pessoas-repository';
import { PrismaPessoas } from 'src/repositories/prisma/prisma-pessoas-repository';


@Module({
  controllers: [PessoasController],
  providers: [
    PessoasService,
    PrismaService,
    {
      provide: PessoasRepository,
      useClass: PrismaPessoas,
    },
    // PrismaPessoas, // Adicione esta linha para incluir PrismaPessoas nos provedores
  ],
})
export class PessoasModule {}
