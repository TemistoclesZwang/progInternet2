import { Pessoa } from "src/pessoa/entities/pessoa.entity";
// import { UpdatePessoaDto } from "src/pessoa/dto/update-pessoa.dto";
import { CreatePessoaDto } from "src/pessoa/dto/create-pessoa.dto";
// import { TermoPessoaDto } from "src/pessoa/dto/termo-pessoa.dto";

export abstract class PessoasRepository {
    abstract create(createPessoaDto: CreatePessoaDto): Promise<void>;
    abstract findAll(): Promise<Pessoa[]>;
    abstract findOne(id: string): Promise<Pessoa>;
    abstract findTerm(termo:string): Promise<Pessoa[]>;
    abstract count(): Promise<number>;
    // abstract update(id: string, updatePessoaDto: UpdatePessoaDto): Promise<Pessoa>;
    abstract remove(id: string): Promise<void>;
}
