
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProdutoDto {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    nome: string;
}
