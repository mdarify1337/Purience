import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository, LessThanOrEqual, Between } from 'typeorm';
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

  async findByOperator(operatorId: string): Promise<Experience[]> {
    return await this.experienceRepository.find({
      where: { operator: { id: operatorId } },
      order: {
        CreatedAt: 'DESC',
      },
    });
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

  async findExperiencesByDateRange(startDate: Date, endDate: Date): 
    Promise<Experience[]> {
    return await this.experienceRepository.find({
        where: {
          CreatedAt: Between(startDate, endDate),
        },
        order: {
          CreatedAt: 'DESC',
        },
      });
  }

  async findAll(): Promise<Experience[]> {
    return await this.experienceRepository.find({
      order: {
        CreatedAt: 'DESC', // Order by creation date
      },
    });
  }
}