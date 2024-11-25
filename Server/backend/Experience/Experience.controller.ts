
import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { ExperienceService } from './Experience.service';
import { CreateExperienceDto } from '../interface/Experience.dto';
import { Experience } from 'Data/Experience.entity';

@Controller('experiences')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Post()
    async create(@Body() createExperienceDto: CreateExperienceDto): Promise<Experience> {
        return this.experienceService.create(createExperienceDto);
    }

  @Get()
  async findAll() {
    return this.experienceService.getAllExperiences();
  }

  @Get('/byTime')
  async findAllByTime(): Promise<Experience[]> {
    return await this.experienceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.experienceService.getExperienceById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateExperienceDto: CreateExperienceDto) {
    return this.experienceService.updateExperience(id, updateExperienceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.experienceService.deleteExperience(id);
  }

  @Get('operator/:operatorId')
  async findByOperator(@Param('operatorId') operatorId: string): Promise<Experience[]> {
    return await this.experienceService.findByOperator(operatorId);
  }

  @Get('date-range')
  async findByDateRange(
    @Query('startDate') startDate: string, // ISO string
    @Query('endDate') endDate: string, // ISO string
  ): Promise<Experience[]> {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return await this.experienceService.findExperiencesByDateRange(start, end);
  }
}
