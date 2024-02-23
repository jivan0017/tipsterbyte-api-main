import { Module } from '@nestjs/common';
import { LocationService } from './services/location.service';
import { LocationController } from './controllers/location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryEntity } from './entities/country.entity';
import { ContinentEntity } from './entities/continent.entity';
import { StateEntity } from './entities/state.entity';
import { StateController } from './controllers/state.controller';
import { StateService } from './services/state.service';
import { CityController } from './controllers/city.controller';
import { CityService } from './services/city.service';
import { CityEntity } from './entities/city.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ContinentEntity,
            CountryEntity,
            StateEntity,
            CityEntity
        ])
    ],
    controllers: [
        LocationController,
        StateController,
        CityController
    ],
    providers: [
        LocationService,
        StateService,
        CityService
    ],
    exports: [
        LocationService
    ]
})
export class LocationModule {}
