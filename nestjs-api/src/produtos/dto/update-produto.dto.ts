import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';
import { IsDate, IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
    @IsString()
    nome?: string;
    
    @IsString()
    destinacao?: string;
    
    @IsNumber()
    @IsPositive()
    rentabilidade?: number;
    
    @IsDate()
    prazo?: Date;
}
