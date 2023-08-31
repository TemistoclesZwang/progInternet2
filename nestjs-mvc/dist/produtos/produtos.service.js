"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const produto_entity_1 = require("./entities/produto.entity");
const uuid_1 = require("uuid");
let ProdutosService = exports.ProdutosService = class ProdutosService {
    constructor() {
        this.arrayDeProdutos = [];
    }
    create(createProdutoDto) {
        const novoProduto = new produto_entity_1.Produto();
        novoProduto.id = (0, uuid_1.v4)();
        novoProduto.nome = createProdutoDto.nome;
        this.arrayDeProdutos.push(novoProduto);
        return novoProduto;
    }
    findAll() {
        return this.arrayDeProdutos;
    }
    findOne(id) {
        return this.arrayDeProdutos.find(produto => produto.id === id);
    }
    update(id, updateProdutoDto) {
        const produto = this.findOne(id);
        if (produto) {
            produto.id = updateProdutoDto.id;
            produto.nome = updateProdutoDto.nome;
        }
        return produto;
    }
    remove(id) {
        const index = this.arrayDeProdutos.findIndex(produto => produto.id === id);
        if (index !== -1) {
            const produtoRemovido = this.arrayDeProdutos.splice(index, 1)[0];
            return produtoRemovido;
        }
        return null;
    }
};
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)()
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map