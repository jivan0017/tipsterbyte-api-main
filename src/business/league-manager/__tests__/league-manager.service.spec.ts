import { Test, TestingModule } from '@nestjs/testing';
import { LeagueManagerService } from '../services/league-manager.service';

describe('LeagueManagerService', () => {
  let service: LeagueManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeagueManagerService],
    }).compile();

    service = module.get<LeagueManagerService>(LeagueManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
