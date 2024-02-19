import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/datasources/data.source';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guards';

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
    AuthModule,
    JwtModule,    
  ],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard
  }],
})
export class AppModule {
    
}
