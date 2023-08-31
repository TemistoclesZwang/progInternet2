import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    create(createProdutoDto: CreateProdutoDto): import("./entities/produto.entity").Produto;
    createForm(): void;
    findAll(): {
        produtos: import("./entities/produto.entity").Produto[];
    };
    findOne(id: string): import("./entities/produto.entity").Produto;
    update(id: string, updateModuleDto: UpdateProdutoDto): import("./entities/produto.entity").Produto;
    remove(id: string): import("./entities/produto.entity").Produto;
}
