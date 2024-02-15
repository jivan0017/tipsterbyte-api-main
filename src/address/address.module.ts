import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { UserModule } from '../user/user.module';
import { CityModule } from '../city/city.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([AddressEntity]),
        UserModule,
        CityModule
    ],
    controllers: [AddressController],
    providers: [AddressService],
})
export class AddressModule { }
