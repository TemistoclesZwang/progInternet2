import { Injectable } from '@nestjs/common';
import { PessoasRepository } from '../repositories/pessoas-repository';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoasService {
  constructor(private readonly pessoasRepository: PessoasRepository) {}

  async create(createPessoaDto: CreatePessoaDto): Promise<void> {
    const { nome, apelido, nascimento, stack } = createPessoaDto;
    await this.pessoasRepository.create(createPessoaDto);
  }

  async findAll(): Promise<Pessoa[]> {
    return this.pessoasRepository.findAll();
  }

  async findOne(id: string): Promise<Pessoa> {
    return this.pessoasRepository.findOne(id);
  }

  async update(id: string, updatePessoaDto: UpdatePessoaDto): Promise<Pessoa> {
    return this.pessoasRepository.update(id, updatePessoaDto);
  }

  async remove(id: string): Promise<void> {
    return this.pessoasRepository.remove(id);
  }
}
