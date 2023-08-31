import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Redirect } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('produtos') // Título das rotas no Swagger
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}
  
  @ApiOperation({ summary: 'Cria um novo produto' }) // Descrição do endpoint
  @ApiResponse({ status: 200, description: 'Produto criado com sucesso' }) // Descrição da resposta
  @ApiResponse({
    status: 400,
    description: 'Requisição inválida',
    type: Error, // Exemplo de resposta de erro
  })
  @Post('salvar')
  @Redirect('/produtos/listar')
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @ApiOperation({ summary: 'Exibe o formulário para criar um novo produto' })
  @Get('novo')
  @Render('produtos/formulario')
  createForm() {
    // Não precisa de código aqui, apenas renderizará a view
  }

  @ApiOperation({ summary: 'Lista todos os produtos' })
  @Get('listar')
  @Render('produtos/listar')
  findAll() {
    const produtos = this.produtosService.findAll();
    return { produtos };
  }

  @ApiOperation({ summary: 'Exibe os detalhes de um produto' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualiza os detalhes de um produto' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateProdutoDto) {
    return this.produtosService.update(id, updateModuleDto);
  }

  @ApiOperation({ summary: 'Remove um produto' })
  @Get('excluir/:id')
  @Redirect('/produtos/listar')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(id);
  }
}
