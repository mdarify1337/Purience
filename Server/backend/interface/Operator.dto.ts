import { IsEmail, IsEnum, IsOptional, IsString, IsUUID, Length } from 'class-validator';
import { UserType } from '../Data/Usertype.entity'

export class CreateOperatorDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsEmail()
  Email: string;

  @IsString()
  @IsOptional()
  Name?: string;

  @IsString()
  @IsOptional()
  CompanyName?: string;

  @IsEnum(UserType)
  userType: UserType;

  @IsString()
  @IsOptional()
  Description?: string;

  @IsString()
  @IsOptional()
  Address?: string;

  @IsString()
  @IsOptional()
  VerificationStatus?: string;

  @IsString()
  @IsOptional()
  Certifications?: string;

  @IsString()
  @IsOptional()
  @Length(8, 20, { message: 'Password must be between 8 and 20 characters.' })
  Password?: string;

  @IsString()
  @IsOptional()
  PhoneNumber?: string;

  @IsString()
  @IsOptional()
  LanguagePreference?: string;

  @IsString()
  @IsOptional()
  ProfilePictureURL?: string;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
