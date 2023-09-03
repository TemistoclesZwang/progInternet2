import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from 'src/database/prisma.service';
import { ProdutosRepository } from "../produtos-repository";

@Injectable()
export class PrismaProdutos implements ProdutosRepository{
    constructor (private prisma: PrismaService){}
    async create (nome: string, status:boolean): Promise<void>{
        await this.prisma.produtos.create({
            // .esse produtos é o nome da tabela no prisma schema
            data:{
                // id: uuidv4(),
                nome,
                status,
            }
        })
    }
}