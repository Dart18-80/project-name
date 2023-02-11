import { Module } from '@nestjs/common';
import { AppController, ExcelController } from './app.controller';
import { AppService } from './app.service';
import { HojaexcelService } from './hojaexcel/hojaexcel.service';
import { CeldaexcelService } from './celdaexcel/celdaexcel.service';

@Module({
  imports: [],
  controllers: [AppController, ExcelController],
  providers: [AppService, HojaexcelService, CeldaexcelService],
})
export class AppModule {}
