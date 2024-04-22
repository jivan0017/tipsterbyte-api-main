import { Test, TestingModule } from '@nestjs/testing';
import { OraculoController } from '../controllers/oraculo.controller';
import { OraculoService } from '../services/oraculo.service';

describe('OraculoController', () => {
  let controller: OraculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OraculoController],
      providers: [OraculoService],
    }).compile();

    controller = module.get<OraculoController>(OraculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
