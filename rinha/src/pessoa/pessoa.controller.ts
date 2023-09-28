import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PessoasService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
// import { TermoPessoaDto } from './dto/termo-pessoa.dto';
import { PessoasRepository } from 'src/repositories/pessoas-repository';
import { ApiOperation, ApiTags, ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@Controller()
@ApiTags('pessoas') // Título das rotas no Swagger
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService, private pessoaRepository: PessoasRepository) {}

  @Post('pessoas')
  @ApiOperation({ summary: 'Cria um novo pessoa' }) // Descrição do endpoint
  @ApiResponse({ status: 201, description: 'Pessoa criada com sucesso' })
  @ApiBadRequestResponse({ description: 'Requisição inválida' })

  async create(@Body() createPessoaDto: CreatePessoaDto) {
    await this.pessoasService.create(createPessoaDto);
  }

  @Get('pessoas/:id')
  @ApiOperation({ summary: 'Lista todos os pessoas' })
  @ApiResponse({ status: 200, description: 'Lista de pessoas retornada com sucesso' })
  @ApiResponse({ status: 404, description: 'Erro' })
  
  async findOne(@Param('id') id: string) {
    return await this.pessoasService.findOne(id);
  }

  @Get('lista')
  @ApiOperation({ summary: 'Lista todos os pessoas' })
  @ApiResponse({ status: 200, description: 'Lista de pessoas retornada com sucesso' })
  
  async findAll() {
    return await this.pessoasService.findAll();
  }

  @Get('pessoas?:t')
  @ApiOperation({ summary: 'Retorna um pessoa pelo ID' })
  @ApiResponse({ status: 200, description: 'Pessoa retornado com sucesso' })
  @ApiResponse({ status: 404, description: 'Pessoa não encontrado' })
  
  async findTerm(@Query('t') termo:string) {
    // const {t} = termoPessoaDto
    return await this.pessoasService.findTerm(termo);
  }

  @Get('contagem-pessoas')
  @ApiOperation({ summary: 'Retorna um pessoa pelo ID' })
  @ApiResponse({ status: 200, description: 'Pessoa retornado com sucesso' })
  @ApiResponse({ status: 404, description: 'Pessoa não encontrado' })
  
  async count() {
    return await this.pessoasService.count();
  }
}
