import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience } from '../Data/Experience.entity';
import { ExperienceController } from './Experience.controller';
import { ExperienceService } from './Experience.service';
import { AuthenticationController } from 'Authentication/authentication.controller';
import { AuthenticationModule } from 'Authentication/authentication.module';
import { Operator } from 'Data/Operator.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([Experience, Operator]),  // Make sure to include both Experience and Operator here
      AuthenticationModule,  // Import AuthenticationModule if the OperatorRepository is part of it
    ],
    providers: [ExperienceService],
    controllers: [ExperienceController],
  })
  export class ExperienceModule {}
