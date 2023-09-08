import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProdutosRepository } from '../produtos-repository';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';
import { UpdateProdutoDto } from 'src/produtos/dto/update-produto.dto';
import { Produto } from 'src/produtos/entities/produto.entity';

@Injectable()
export class PrismaProdutos implements ProdutosRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(createProdutoDto: CreateProdutoDto): Promise<void> {
        const { nome, destinacao, rentabilidade, prazo } = createProdutoDto;
        await this.prisma.produtos.create({
            data: {
                nome,
                destinacao,
                rentabilidade,
                prazo,
            },
        });
    }

    async findAll(): Promise<Produto[]> {
        return this.prisma.produtos.findMany();
    }

    async findOne(id: number): Promise<Produto> {
        return this.prisma.produtos.findUnique({
            where: {
                id,
            },
        });
    }

    async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
        const { nome, destinacao, rentabilidade, prazo } = updateProdutoDto;
        return this.prisma.produtos.update({
            where: {
                id,
            },
            data: {
                nome,
                destinacao,
                rentabilidade,
                prazo,
            },
        });
    }

    async remove(id: number): Promise<void> {
        await this.prisma.produtos.delete({
            where: {
                id,
            },
        });
    }
}
