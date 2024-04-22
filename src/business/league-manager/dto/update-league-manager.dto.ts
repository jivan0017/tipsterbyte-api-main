import { PartialType } from '@nestjs/mapped-types';
import { CreateLeagueManagerDto } from './create-league-manager.dto';

export class UpdateLeagueManagerDto extends PartialType(CreateLeagueManagerDto) {}
