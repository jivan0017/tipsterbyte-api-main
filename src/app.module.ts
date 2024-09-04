import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/datasources/data.source';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guards';
import { LocationModule } from './location/location.module';
import { OraculoModule } from './business/oraculo/oraculo.module';
import { LeagueManagerModule } from './business/league-manager/league-manager.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.PROJECT_ENVIROMENT}.env`,
            isGlobal: true,
        }),
        TypeOrmModule.forRoot(
            DataSourceConfig
        ),

        UserModule,
        AuthModule,
        JwtModule,
        LocationModule,
        LeagueManagerModule,
        OraculoModule,
    ],
    controllers: [],
    providers: [{
        provide: APP_GUARD,
        useClass: RolesGuard
    }],
})
export class AppModule {

}
