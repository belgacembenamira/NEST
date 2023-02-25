import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyqslConfig } from './config';
@Module({
  imports: [TypeOrmModule.forRoot({ MyqslConfig })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
