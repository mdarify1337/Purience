
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
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
}
