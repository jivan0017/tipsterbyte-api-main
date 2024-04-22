import { Test, TestingModule } from '@nestjs/testing';
import { LeagueManagerController } from '../controllers/league-manager.controller';
import { LeagueManagerService } from '../services/league-manager.service';

describe('LeagueManagerController', () => {
  let controller: LeagueManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeagueManagerController],
      providers: [LeagueManagerService],
    }).compile();

    controller = module.get<LeagueManagerController>(LeagueManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
