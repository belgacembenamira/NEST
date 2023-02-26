/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyqslConfig } from './config/config';
import { Entities } from './models/entity/index.';
// import { Entities } from './models/entity';
import { Address } from './models/entity/Adress';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...MyqslConfig,
      entities: Entities,
      autoLoadEntities: true,
      
    }),
  ],
 
})
export class AppModule {}
