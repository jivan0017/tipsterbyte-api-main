import { Test, TestingModule } from '@nestjs/testing';
import { CityService } from '../../services/city.service';
import { Repository } from 'typeorm';
import { CityEntity } from '../../entities/city.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { cityMock } from '../../__mocks__/city/city.mock';

describe('CityService', () => {
    let service: CityService;

    let cityRepository: Repository<CityEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CityService,
                {
                    provide: getRepositoryToken(CityEntity),
                    useValue: {
                        findOne: jest.fn().mockResolvedValue(cityMock),
                        find: jest.fn().mockResolvedValue(cityMock),
                    },
                },                
            ],
        }).compile();

        service = module.get<CityService>(CityService);
        cityRepository = module.get<Repository<CityEntity>>(
            getRepositoryToken(CityEntity)
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(cityRepository).toBeDefined();
    });
    
    it('should be defined findOne city',async () => {
        const city = await service.getCityById(cityMock.id);

        expect(city).toEqual(cityMock)
    });

    it('should be defined getCityById - not Found - Exception',async () => {
        jest.spyOn(cityRepository, 'findOne').mockResolvedValue(undefined);
        
        expect(service.getCityById(cityMock.id)).rejects.toThrowError();
    });

    it('should be defined get cities in getAllCitiesByStateId city',async () => {
        const city = await service.getAllCitiesByStateId(cityMock.id);
        console.log(">>> city ", city)
        expect(city).toEqual(cityMock);
    });

});
