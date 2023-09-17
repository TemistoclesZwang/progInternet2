import { Injectable } from '@nestjs/common';
import { PessoasRepository } from '../repositories/pessoas-repository';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
// import { TermoPessoaDto } from './dto/termo-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoasService {
  constructor(private readonly pessoasRepository: PessoasRepository) {}

  async create(createPessoaDto: CreatePessoaDto): Promise<void> {
    const { nome, apelido, nascimento, stack } = createPessoaDto;
    await this.pessoasRepository.create(createPessoaDto);
  }

  async findOne(id: string): Promise<Pessoa> {
    return this.pessoasRepository.findOne(id);
  }

  async findTerm(termo:string): Promise<Pessoa[]> {
    return this.pessoasRepository.findTerm(termo);
  }

  async count(): Promise<number> {
    return this.pessoasRepository.count();
  }
}
