import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProdutosService {
  public arrayDeProdutos: Produto[] = []; // Array para armazenar os produtos

  create(createProdutoDto: CreateProdutoDto): Produto {
    const novoProduto = new Produto(); // Criar uma nova instância de Produto
    // novoProduto.id = createProdutoDto.id;
    novoProduto.id = uuidv4()
    novoProduto.nome = createProdutoDto.nome;

    this.arrayDeProdutos.push(novoProduto); // Adicionar o novo produto ao array

    return novoProduto; // Retornar o novo produto criado
  }

  findAll(): Produto[] {
    return this.arrayDeProdutos; // Retornar todos os produtos
  }

  findOne(id: string): Produto {
    return this.arrayDeProdutos.find(produto => produto.id === id); // Encontrar o produto pelo ID
  }

  update(id: string, updateProdutoDto: UpdateProdutoDto): Produto {
    const produto = this.findOne(id); // Encontrar o produto pelo ID

    if (produto) {
      // Atualizar os campos do produto
      produto.id = updateProdutoDto.id;
      produto.nome = updateProdutoDto.nome;
    }

    return produto; // Retornar o produto atualizado
  }

  remove(id: string): Produto {
    const index = this.arrayDeProdutos.findIndex(produto => produto.id === id); // Encontrar o índice do produto

    if (index !== -1) {
      const produtoRemovido = this.arrayDeProdutos.splice(index, 1)[0]; // Remover o produto do array
      return produtoRemovido; // Retornar o produto removido
    }
    

    return null; // Retornar null se o produto não foi encontrado
  }
}
