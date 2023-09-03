import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Redirect } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProdutosRepository } from 'src/repositories/produtos-repository';
import { PrismaProdutos } from 'src/repositories/prisma/prisma-produtos-repository';

@Controller('produtos')
@ApiTags('produtos') // Título das rotas no Swagger
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService, 
    private produtoRepository: ProdutosRepository) { }

  @ApiResponse({ status: 200, description: 'Produto criado com sucesso' }) // Descrição da resposta
  @ApiOperation({ summary: 'Cria um novo produto' }) // Descrição do endpoint
  @ApiResponse({
    status: 400,
    description: 'Requisição inválida',
    type: Error, // Exemplo de resposta de erro
  })
  
  @Post('new')
  @Redirect('/produtos/listar')
  async getTeste(@Body() body: CreateProdutoDto){
    const {nome} = body
    await this.produtoRepository.create(nome)
    // .50min = envio de body e dto
    //.58 min = repository
    // .1:15 = organização repositories
  }

  @Get('list')
  @ApiOperation({ summary: 'Lista todos os produtos' })
  @Render('produtos/listar')
  async achar() {
    const produtos = await this.produtoRepository.findAll();
    return { produtos };
  }

  // @Delete('excluir/:id')
  // @ApiOperation({ summary: 'Remove um produto' })
  // // .não podemos usar @delete pois estamos trabalhando
  // // .com o formulario html e só aceita get e post
  // @Redirect('/produtos/listar')
  // remove(@Param('id') id: string) {
  //   return this.produtosService.remove(id);
  // }
  
// !antigo
  @Post('salvar')
  @Redirect('/produtos/listar')
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get('novo')
  @ApiOperation({ summary: 'Exibe o formulário para criar um novo produto' })
  @Render('produtos/formulario')
  createForm() {
    // Não precisa de código aqui, apenas renderizará a view
  }

  @Get('listar')
  @ApiOperation({ summary: 'Lista todos os produtos' })
  @Render('produtos/listar')
  findAll() {
    const produtos = this.produtosService.findAll();
    return { produtos };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Exibe os detalhes de um produto' })
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza os detalhes de um produto' })
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(id, updateProdutoDto);
  }

  @Get('excluir/:id')
  @ApiOperation({ summary: 'Remove um produto' })
  // .não podemos usar @delete pois estamos trabalhando
  // .com o formulario html e só aceita get e post
  @Redirect('/produtos/listar')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(id);
  }
}
