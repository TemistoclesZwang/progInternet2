import { v1 as uuidv1 } from 'uuid';

export class GerarIdCurto {
    static idCurto(): string {
        const id = uuidv1();
        return id;
    }
}