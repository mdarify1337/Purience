import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {  DynamicModule } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres_db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'mydatabase',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ClientsModule.register([
      { 
          name: 'AUTH_SERVICE', 
          transport: Transport.RMQ, 
          options: 
          { 
            urls: ['amqp://localhost:5672'], 
            queue: 'auth_queue' 
          } 
      },
      { 
        name: 'PROFILE_SERVICE', 
        transport: Transport.RMQ, 
        options: 
        { 
          urls: ['amqp://localhost:5672'], 
          queue: 'profile_queue' 
        } 
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
