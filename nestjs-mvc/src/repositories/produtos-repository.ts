import { Produto } from "src/produtos/entities/produto.entity";

export abstract class ProdutosRepository{
    abstract create (nome: string):Promise <void>
    abstract findAll(): Promise<Produto[]>; 
}