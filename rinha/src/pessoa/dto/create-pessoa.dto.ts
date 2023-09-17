import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, Length, IsNumber, IsDate, IsPositive } from 'class-validator';

export class CreatePessoaDto {
    @ApiProperty({ description: 'Apelido da Pessoa até 100 chars' })
    @IsNotEmpty()
    @IsString()
    @Length(1, 100) 
    nome: string;

    @ApiProperty({ description: 'Apelido da Pessoa até 32 chars' })
    @IsNotEmpty()
    @IsString()
    @Length(1, 32)
    apelido: string;

    @ApiProperty({ description:'Data de nascimento da Pessoa no formato AAAA-MM-DD (ano, mês, dia)' })
    @IsNotEmpty()
    @IsString()
    nascimento: string;

    // @ArrayNotEmpty
    @ApiProperty({ description: 'Stack profissional da pessoa' })
    @IsNotEmpty()
    // stack: string[] = [];
    stack: string;
}
// function ArrayNotEmpty(target: CreatePessoaDto, propertyKey: 'stack'): void {
//     throw new Error('Function not implemented.');
// }

// function IsUnique(): (target: CreatePessoaDto, propertyKey: "id") => void {
//     throw new Error('Function not implemented.');
// }

