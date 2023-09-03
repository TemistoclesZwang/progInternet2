export abstract class ProdutosRepository{
    abstract create (nome: string, status: boolean):Promise <void>
}