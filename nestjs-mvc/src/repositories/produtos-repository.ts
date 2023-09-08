import { Produto } from "src/produtos/entities/produto.entity";
import { UpdateProdutoDto } from "src/produtos/dto/update-produto.dto";
import { CreateProdutoDto } from "src/produtos/dto/create-produto.dto";

export abstract class ProdutosRepository {
    abstract create(createProdutoDto: CreateProdutoDto): Promise<void>;
    abstract findAll(): Promise<Produto[]>;
    abstract findOne(id: number): Promise<Produto>;
    abstract update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto>;
    abstract remove(id: number): Promise<void>;
}
