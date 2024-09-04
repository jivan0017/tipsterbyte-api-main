// import { Injectable } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CreateLeagueManagerDto } from '../dto/create-league-manager.dto';
import { UpdateLeagueManagerDto } from '../dto/update-league-manager.dto';

@Injectable()
export class LeagueManagerService {
    create(createLeagueManagerDto: CreateLeagueManagerDto) {
        return 'This action adds a new leagueManager';
    }

    findAll() {
        return `This action returns all leagueManager`;
    }

    findOne(id: number) {
        return `This action returns a #${id} leagueManager`;
    }

    update(id: number, updateLeagueManagerDto: UpdateLeagueManagerDto) {
        return `This action updates a #${id} leagueManager`;
    }

    remove(id: number) {
        return `This action removes a #${id} leagueManager`;
    }
}
