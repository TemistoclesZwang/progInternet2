import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty } from 'src/decorators/array-not-empty.decorator';
import { IsArrayOfStrings } from 'src/decorators/array-is-string.decorator';
import { IsBoolean, IsNotEmpty, IsString, Length, IsNumber, IsDate, IsPositive } from 'class-validator';

export class CreatePessoaDto {
    @ApiProperty({ description: 'Apelido da Pessoa até 100 chars' })
    @IsNotEmpty()
    @IsString()
    @Length(1, 100) 
    // @IsUnique()
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

    @ArrayNotEmpty()
    @IsArrayOfStrings()
    @ApiProperty({ description: 'Stack profissional da pessoa' })
    @IsNotEmpty()
    stack: string[] = [];
}



