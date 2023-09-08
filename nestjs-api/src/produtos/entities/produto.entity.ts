import { ApiProperty } from '@nestjs/swagger';

export class Produto {
    @ApiProperty()
    nome: string;

    @ApiProperty()
    destinacao: string;

    @ApiProperty()
    rentabilidade: number;

    @ApiProperty()
    prazo: Date;
}
