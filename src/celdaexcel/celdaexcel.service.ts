import { Injectable } from '@nestjs/common';

@Injectable()
export class CeldaexcelService {
    public celda = [
        {
          id: 1,
          contenido: '',
        }
    ];

    getAll(){
        return this.celda
    }

    insert(celda) {
        this.celda = [
            ...this.celda,
            celda
        ];
    }
}
