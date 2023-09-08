import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, Length, IsNumber, IsDate, IsPositive } from 'class-validator';

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
    @IsNumber()
    @IsPositive()
    rentabilidade: number;

    @ApiProperty({ description: 'Prazo do Produto' })
    @IsNotEmpty()
    // @IsDate()
    // !resolver esse tipo no BD
    prazo: Date;
}
