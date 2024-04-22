import { PartialType } from '@nestjs/mapped-types';
import { CreateOraculoDto } from './create-oraculo.dto';

export class UpdateOraculoDto extends PartialType(CreateOraculoDto) {}
