import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from 'Authentication/authentication.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'Data/Client.entity';
import { Operator } from 'Data/Operator.entity';
import { Experience } from 'Data/Experience.entity';
import { ExperienceModule } from 'Experience/Experience.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      autoLoadEntities: true,
      entities:[Client, Operator, Experience]
    }),
    AuthenticationModule,
    ExperienceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

