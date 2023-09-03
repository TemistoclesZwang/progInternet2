export class Produto{
    id: string
    nome: string
    status: boolean

    alternarStatus() {
        this.status = !this.status;
    }

    getStatusTexto(): string {
        return this.status ? "Disponível" : "Indisponível";
    }
}


