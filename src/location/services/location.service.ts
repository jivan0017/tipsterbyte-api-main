import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {

  findAll() {
    return `This action returns all location`;
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
