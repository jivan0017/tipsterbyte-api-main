import { Module } from '@nestjs/common';
import { LeagueManagerService } from './services/league-manager.service';
import { LeagueManagerController } from './controllers/league-manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeagueEntity } from './entities/league.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            LeagueEntity,
        ])
    ],      
    controllers: [LeagueManagerController],
    providers: [LeagueManagerService],
})
export class LeagueManagerModule {}
