import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: `.${process.env.PROJECT_ENVIROMENT}.env`,
        isGlobal: true,
      }),    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    
}
