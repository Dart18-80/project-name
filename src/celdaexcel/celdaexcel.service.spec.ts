import { Test, TestingModule } from '@nestjs/testing';
import { CeldaexcelService } from './celdaexcel.service';

describe('CeldaexcelService', () => {
  let service: CeldaexcelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CeldaexcelService],
    }).compile();

    service = module.get<CeldaexcelService>(CeldaexcelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
