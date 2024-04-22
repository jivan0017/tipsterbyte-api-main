import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateOraculoDto } from '../dto/create-oraculo.dto';
import { UpdateOraculoDto } from '../dto/update-oraculo.dto';
import { OraculoService } from '../services/oraculo.service';

@Controller('oraculo')
export class OraculoController {
  constructor(private readonly oraculoService: OraculoService) {}

  @Post()
  create(@Body() createOraculoDto: CreateOraculoDto) {
    return this.oraculoService.create(createOraculoDto);
  }

  @Get()
  findAll() {
    return this.oraculoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oraculoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOraculoDto: UpdateOraculoDto) {
    return this.oraculoService.update(+id, updateOraculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oraculoService.remove(+id);
  }
}
