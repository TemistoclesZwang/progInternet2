import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
export declare class ProdutosService {
    arrayDeProdutos: Produto[];
    create(createProdutoDto: CreateProdutoDto): Produto;
    findAll(): Produto[];
    findOne(id: string): Produto;
    update(id: string, updateProdutoDto: UpdateProdutoDto): Produto;
    remove(id: string): Produto;
}
