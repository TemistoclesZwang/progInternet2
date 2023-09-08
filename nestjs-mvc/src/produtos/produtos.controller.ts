import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Redirect } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutosRepository } from 'src/repositories/produtos-repository';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService, private produtoRepository: ProdutosRepository) {}

  @Get('/novo')
  @Render('produtos/cadastro')
  public formularioProduto() {}

  @Post('/salvar')
  @Redirect('/produtos/lista')
  async salvarProduto(@Body() createProdutoDto: CreateProdutoDto) {
    // createProdutoDto.rentabilidade = parseFloat(createProdutoDto.rentabilidade);
    createProdutoDto.rentabilidade = Number(createProdutoDto.rentabilidade);
    createProdutoDto.taxaAdministracao = Number(createProdutoDto.taxaAdministracao);
    // .modificar esses trechos
    createProdutoDto.prazo = new Date(createProdutoDto.prazo);
    
    await this.produtosService.create(createProdutoDto);
  }

  @Get('/lista')
  @Render('produtos/lista')
  async all() {
    return  { produtos: await this.produtosService.findAll()};
  }

  @Get('lista/:id')
  async findOne(@Param('id') id: string) {
    return { produtos: await  this.produtosService.findOne(+id)};
  }

  // @Get('atualiza/:id') //! testar
  // update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
  //   return this.produtosService.update(+id, updateProdutoDto);
  // }

  @Get('status/:id')
  @Redirect('/produtos/lista')
  status(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(+id, updateProdutoDto);
  }

  @Get('/excluir/:id')
  @Redirect('/produtos/lista')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id);
  }
}
