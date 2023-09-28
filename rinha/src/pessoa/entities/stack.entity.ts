import { ApiProperty } from '@nestjs/swagger';

export class Stack {
    @ApiProperty()
    id: number;

    @ApiProperty()
    stackNome: string;

    constructor(id: number, stackNome: string) {
        this.id = id;
        this.stackNome = stackNome;
    }
}
