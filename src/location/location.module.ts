import { Module } from '@nestjs/common';
import { LocationService } from './services/location.service';
import { LocationController } from './controllers/location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryEntity } from './entities/country.entity';
import { ContinentEntity } from './entities/continent.entity';
import { StateEntity } from './entities/state.entity';
import { StateController } from './controllers/state.controller';
import { StateService } from './services/state.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ContinentEntity,
            CountryEntity,
            StateEntity
        ])
    ],
    controllers: [
        LocationController,
        StateController
    ],
    providers: [
        LocationService,
        StateService
    ],
    exports: [
        LocationService
    ]
})
export class LocationModule {}
