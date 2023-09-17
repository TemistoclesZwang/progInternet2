import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoasRepository } from 'src/repositories/pessoas-repository';
import { ApiOperation, ApiTags, ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@Controller('pessoas')
@ApiTags('pessoas') // Título das rotas no Swagger
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService, private pessoaRepository: PessoasRepository) {}

  @Post('novo')
  @ApiOperation({ summary: 'Cria um novo pessoa' }) // Descrição do endpoint
  @ApiResponse({ status: 201, description: 'Pessoa criado com sucesso' })
  @ApiBadRequestResponse({ description: 'Requisição inválida' })
  async create(@Body() createPessoaDto: CreatePessoaDto) {
    // Converta a string de prazo em um objeto Date
    createPessoaDto.prazo = new Date(createPessoaDto.prazo);

    await this.pessoasService.create(createPessoaDto);
  }

  @Get('lista')
  @ApiOperation({ summary: 'Lista todos os pessoas' })
  @ApiResponse({ status: 200, description: 'Lista de pessoas retornada com sucesso' })
  findAll() {
    return this.pessoasService.findAll();
  }

  @Get('lista/:id')
  @ApiOperation({ summary: 'Retorna um pessoa pelo ID' })
  @ApiResponse({ status: 200, description: 'Pessoa retornado com sucesso' })
  @ApiResponse({ status: 404, description: 'Pessoa não encontrado' })
  findOne(@Param('id') id: string) {
    return this.pessoasService.findOne(+id);
  }

  @Patch('lista/:id')
  @ApiOperation({ summary: 'Atualiza um pessoa pelo ID' })
  @ApiResponse({ status: 200, description: 'Pessoa atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Pessoa não encontrado' })
  update(@Param('id') id: string, @Body() updatePessoaDto: UpdatePessoaDto) {
    return this.pessoasService.update(+id, updatePessoaDto);
  }

  @Delete('lista/:id')
  @ApiOperation({ summary: 'Remove uma pessoa pelo ID' })
  @ApiResponse({ status: 200, description: 'Pessoa removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Pessoa não encontrado' })
  remove(@Param('id') id: string) {
    return this.pessoasService.remove(+id);
  }
}
