import { ApiProperty } from '@nestjs/swagger';

export class Pessoa {
    @ApiProperty()
    id: string;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    apelido: string;

    @ApiProperty()
    nascimento: string;

    @ApiProperty()
    stack: string[] = [];
}
