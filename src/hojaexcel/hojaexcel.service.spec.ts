import { Test, TestingModule } from '@nestjs/testing';
import { HojaexcelService } from './hojaexcel.service';

describe('HojaexcelService', () => {
  let service: HojaexcelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HojaexcelService],
    }).compile();

    service = module.get<HojaexcelService>(HojaexcelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
