import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, Length, IsNumber, IsDate, IsPositive, IsNumberString } from 'class-validator';

export class CreateProdutoDto {
    @ApiProperty({ description: 'Nome do Produto' })
    @IsNotEmpty()
    @IsString()
    @Length(5, 32) //. para atender regra de 32 characters
    nome: string;

    @ApiProperty({ description: 'Destinação do Produto' })
    @IsNotEmpty()
    @IsString()
    destinacao: string;

    @ApiProperty({ description: 'Rentabilidade do Produto' })
    @IsNotEmpty()
    @IsNumberString()
    // @IsPositive()
    rentabilidade: number;

    @ApiProperty({ description: 'Prazo do Produto' })
    @IsNotEmpty()
    // @IsDate()
    // !resolver esse tipo no BD
    prazo: Date;

    @ApiProperty({ description: 'Taxa do Produto' })
    @IsNotEmpty()
    @IsNumberString()
    taxaAdministracao: number;
}
