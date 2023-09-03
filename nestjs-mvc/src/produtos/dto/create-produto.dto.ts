
import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateProdutoDto {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    @Length(5,32)
    // . para atender a regra da aplicação no slide de 32 caracters
    nome: string;

    @IsNotEmpty()
    @IsBoolean()
    status: boolean;
}
