import { ApiProperty } from '@nestjs/swagger';
import { Stack } from './stack.entity';

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
    stack: Stack[] | string[] = []; //transformando`stack` em uma coleção de objetos Stack
}
