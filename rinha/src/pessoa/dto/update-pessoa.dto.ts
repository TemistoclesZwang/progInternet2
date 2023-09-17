import { PartialType } from '@nestjs/mapped-types';
import { CreatePessoaDto } from './create-pessoa.dto';
import { IsDate, IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdatePessoaDto extends PartialType(CreatePessoaDto) {
    @IsString()
    nome?: string;
    
    @IsString()
    apelido?: string;
    
    @IsNumber()
    @IsPositive()
    nascimento?: string;
    
    @IsString()
    stack?: string[];
}
