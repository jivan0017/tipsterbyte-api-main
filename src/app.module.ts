import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/datasources/data.source';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';
import { AddressModule } from './address/address.module';

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
    StateModule,
    CityModule,
    AddressModule,
    AuthModule,
    JwtModule,    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
    
}
