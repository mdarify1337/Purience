import { IsString, IsOptional, IsArray, IsNumber, IsObject, IsNotEmpty } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  @IsNotEmpty()
  Title: string;

  @IsString()
  @IsNotEmpty()
  Description: string;

  @IsString()
  @IsNotEmpty()
  Category: string;

  @IsObject()
  @IsNotEmpty()
  Location: {
    City: string;
    Country: string;
    Coordinates: {
      lat: number;
      lng: number;
    };
  };

  @IsNumber()
  @IsNotEmpty()
  Price: number;

  @IsString()
  @IsNotEmpty()
  Currency: string;

  @IsObject()
  @IsNotEmpty()
  AvailabilityCalendar: any;

  @IsArray()
  @IsString({ each: true })
  Images: string[];

  @IsArray()
  @IsString({ each: true })
  Videos: string[];

  @IsString()
  @IsNotEmpty()
  SustainabilityPractices: string;

  @IsString()
  @IsNotEmpty()
  operatorId: string;
}
