import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Experience } from '../Data/Experience.entity';
import { CreateExperienceDto } from '../interface/Experience.dto'; // DTO for creating experiences
import { Operator } from 'Data/Operator.entity';
@Injectable()
export class ExperienceService {
  constructor(
    @InjectRepository(Experience)
    private readonly experienceRepository: Repository<Experience>,
    @InjectRepository(Operator) private readonly OperatorRepository: Repository<Operator>,
  ) {}

  async create(createExperienceDto: CreateExperienceDto): Promise<Experience> {
    const { operatorId, ...experienceData } = createExperienceDto;
    const operator = await this.OperatorRepository.findOne({
        where: { id: operatorId },
    });
    if (!operator) {
        throw new Error('Operator not found');
    }
    const experience = this.experienceRepository.create({
        ...experienceData,
        operator,
    });
    return await this.experienceRepository.save(experience);
}


  async getAllExperiences(): Promise<Experience[]> {
    return this.experienceRepository.find();
  }

  async getExperienceById(id: string): Promise<Experience> {
    return this.experienceRepository.findOne({
      where: { ExperienceID: id },
    });
  }

  async updateExperience(id: string, updateExperienceDto: CreateExperienceDto): Promise<Experience> {
    const experience = await this.experienceRepository.findOne({
        where: { ExperienceID: id },
      });
    if (!experience) {
      throw new Error('Experience not found');
    }

    this.experienceRepository.merge(experience, updateExperienceDto);
    return this.experienceRepository.save(experience);
  }


  async deleteExperience(id: string): Promise<void> {
    const experience = await this.experienceRepository.findOne({
        where: { ExperienceID: id },
      });
    if (!experience) {
      throw new Error('Experience not found');
    }
    await this.experienceRepository.remove(experience);
  }
}