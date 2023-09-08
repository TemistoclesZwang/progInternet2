import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutosRepository } from 'src/repositories/produtos-repository';
import { ApiOperation, ApiTags, ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@Controller('produtos')
@ApiTags('produtos') // Título das rotas no Swagger
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService, private produtoRepository: ProdutosRepository) {}

  @Post('novo')
  @ApiOperation({ summary: 'Cria um novo produto' }) // Descrição do endpoint
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso' })
  @ApiBadRequestResponse({ description: 'Requisição inválida' })
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    // Converta a string de prazo em um objeto Date
    createProdutoDto.prazo = new Date(createProdutoDto.prazo);

    await this.produtosService.create(createProdutoDto);
  }

  @Get('lista')
  @ApiOperation({ summary: 'Lista todos os produtos' })
  @ApiResponse({ status: 200, description: 'Lista de produtos retornada com sucesso' })
  findAll() {
    return this.produtosService.findAll();
  }

  @Get('lista/:id')
  @ApiOperation({ summary: 'Retorna um produto pelo ID' })
  @ApiResponse({ status: 200, description: 'Produto retornado com sucesso' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(+id);
  }

  @Patch('lista/:id')
  @ApiOperation({ summary: 'Atualiza um produto pelo ID' })
  @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(+id, updateProdutoDto);
  }

  @Delete('lista/:id')
  @ApiOperation({ summary: 'Remove um produto pelo ID' })
  @ApiResponse({ status: 200, description: 'Produto removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id);
  }
}
