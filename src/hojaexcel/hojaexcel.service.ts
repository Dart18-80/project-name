import { Injectable } from '@nestjs/common';
import { CeldaexcelService } from 'src/celdaexcel/celdaexcel.service';

@Injectable()
export class HojaexcelService {
    private hojasExcel = [
        {
          id: 1,
          name: 'Excel Numero 1',
          CeldaexcelService
        }
    ];

    getAll(){
        return this.hojasExcel
    }

    insert(hojasExcel) {
        this.hojasExcel = [
            ...this.hojasExcel,
            hojasExcel
        ];
    }
}

