import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeagueManagerService } from '../services/league-manager.service';
import { CreateLeagueManagerDto } from '../dto/create-league-manager.dto';
import { UpdateLeagueManagerDto } from '../dto/update-league-manager.dto';

@Controller('league-manager')
export class LeagueManagerController {
  constructor(private readonly leagueManagerService: LeagueManagerService) {}

  @Post()
  create(@Body() createLeagueManagerDto: CreateLeagueManagerDto) {
    return this.leagueManagerService.create(createLeagueManagerDto);
  }

  @Get()
  findAll() {
    return this.leagueManagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leagueManagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeagueManagerDto: UpdateLeagueManagerDto) {
    return this.leagueManagerService.update(+id, updateLeagueManagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leagueManagerService.remove(+id);
  }
}
