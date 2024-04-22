import { Module } from '@nestjs/common';
import { OraculoService } from './services/oraculo.service';
import { OraculoController } from './controllers/oraculo.controller';
import { OraculoEntity } from './entities/oraculo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            OraculoEntity,
        ])
    ],    
    controllers: [OraculoController],
    providers: [OraculoService],
})
export class OraculoModule {}
