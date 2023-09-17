import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GerarIdCurto } from 'src/pessoa/id.service';
import { PessoasRepository } from '../pessoas-repository';
import { CreatePessoaDto } from 'src/pessoa/dto/create-pessoa.dto';
import { UpdatePessoaDto } from 'src/pessoa/dto/update-pessoa.dto';
import { Pessoa } from 'src/pessoa/entities/pessoa.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PrismaPessoas implements PessoasRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(createPessoaDto: CreatePessoaDto): Promise<void> {
        const id = GerarIdCurto.idCurto()
        const { nome, apelido, nascimento, stack } = createPessoaDto;
        await this.prisma.pessoas.create({
            data: {
                id,
                nome,
                apelido,
                nascimento,
                stack,
            },
        });
    }

    async findAll(): Promise<Pessoa[]> {
        return this.prisma.pessoas.findMany();
    }

    async findOne(id: string): Promise<Pessoa> {
        return this.prisma.pessoas.findUnique({
            where: {
                id,
            },
        });
    }

    async findTerm(termo: string): Promise<Pessoa[]> {
        const pessoas = await this.prisma.pessoas.findMany({
            where: {
                OR: [
                    {
                        nome: {
                            contains: termo,
                        },
                    },
                    {
                        apelido: {
                            contains: termo,
                        },
                    },
                ],
            },
        });
    
        return pessoas;
    }

    async count(): Promise<number> {
        return this.prisma.pessoas.count();
    }
    

    async update(id: string, updatePessoaDto: UpdatePessoaDto): Promise<Pessoa> {
        const { nome, apelido, nascimento, stack } = updatePessoaDto;
        return this.prisma.pessoas.update({
            where: {
                id,
            },
            data: {
                nome,
                apelido,
                nascimento,
                stack,
            },
        });
    }

    async remove(id: string): Promise<void> {
        await this.prisma.pessoas.delete({
            where: {
                id,
            },
        });
    }
}
