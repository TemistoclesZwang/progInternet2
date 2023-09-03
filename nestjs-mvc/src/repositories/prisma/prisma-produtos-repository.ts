import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from 'src/database/prisma.service';
import { ProdutosRepository } from "../produtos-repository";
import { Produto } from "src/produtos/entities/produto.entity";

@Injectable()
export class PrismaProdutos implements ProdutosRepository{
    constructor (private prisma: PrismaService){}
    
    async create (nome: string): Promise<void>{
        await this.prisma.produtos.create({
            // .esse produtos é o nome da tabela no prisma schema
            data:{
                // id: uuidv4(),
                nome,
                status: true,
            }
        })
    }

    async findAll(): Promise<Produto[]> {
        const prismaProdutos = await this.prisma.produtos.findMany();
        
        // Mapear os resultados do Prisma para o tipo Produto
        return prismaProdutos.map((prismaProduto) => {
            const produto = new Produto();
            produto.id = prismaProduto.id.toString();
            produto.nome = prismaProduto.nome;
            produto.status = prismaProduto.status;
            return produto;
        });
    }
}