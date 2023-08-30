import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Redirect } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produtos')
// .todas as rotas abaixo começam com produtos/
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post('salvar')
  @Redirect('/produtos/listar')
// .redireciona para lista de produtos apos o post
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get('novo')
  @Render('produtos/formulario')
  createForm() {
    // Não precisa de código aqui, apenas renderizará a view
  }

  
  @Get('listar')
  @Render('produtos/listar') // Renderiza a view 'lista.hbs'
  findAll() {
    const produtos = this.produtosService.findAll(); // Obtenha a lista de produtos do serviço
    return { produtos }; // Passa a lista de produtos para a view
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateProdutoDto) {
    return this.produtosService.update(id, updateModuleDto);
  }

  @Delete('excluir/:id')
  @Redirect('/produtos/listar')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(id);
  }
}
