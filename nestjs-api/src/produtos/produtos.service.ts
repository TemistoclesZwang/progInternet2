import { Injectable } from '@nestjs/common';
import { ProdutosRepository } from '../repositories/produtos-repository';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(private readonly produtosRepository: ProdutosRepository) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<void> {
    const { nome, destinacao, rentabilidade, prazo } = createProdutoDto;
    await this.produtosRepository.create(createProdutoDto);
  }

  async findAll(): Promise<Produto[]> {
    return this.produtosRepository.findAll();
  }

  async findOne(id: number): Promise<Produto> {
    return this.produtosRepository.findOne(id);
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
    return this.produtosRepository.update(id, updateProdutoDto);
  }

  async remove(id: number): Promise<void> {
    return this.produtosRepository.remove(id);
  }
}
