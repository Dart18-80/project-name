import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HojaexcelService } from './hojaexcel/hojaexcel.service';

@Controller('excel')
export class ExcelController {

  constructor(private readonly HojaexcelService: HojaexcelService) { }

  @Get()
  getAllExcel() {
    return this.HojaexcelService.getAll();
  }

  @Post()
  @HttpCode(204)
  createExcel(
    @Body('name') name: string,
  ) {
    this.HojaexcelService.insert({
      id: this.HojaexcelService.getAll().length+1,
      name
    });
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postExcel(): string{
    return this.appService.getHello();
  }
}
