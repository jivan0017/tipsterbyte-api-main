import { Test, TestingModule } from '@nestjs/testing';
import { OraculoService } from '../services/oraculo.service';


describe('OraculoService', () => {
  let service: OraculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OraculoService],
    }).compile();

    service = module.get<OraculoService>(OraculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
