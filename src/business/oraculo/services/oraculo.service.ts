import { Injectable } from '@nestjs/common';
import { CreateOraculoDto } from '../dto/create-oraculo.dto';
import { UpdateOraculoDto } from '../dto/update-oraculo.dto';

@Injectable()
export class OraculoService {
  create(createOraculoDto: CreateOraculoDto) {
    return 'This action adds a new oraculo';
  }

  findAll() {
    return `This action returns all oraculo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oraculo`;
  }

  update(id: number, updateOraculoDto: UpdateOraculoDto) {
    return `This action updates a #${id} oraculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} oraculo`;
  }
}
