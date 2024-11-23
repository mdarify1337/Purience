import { IsEmail, IsEnum, IsOptional, IsString, IsUUID, Length } from 'class-validator';
import { UserType } from './../Data/Usertype.entity'

export class CreateClientDto {
  @IsString()
  @Length(1, 100)
  Name: string;

  @IsEmail()
  Email: string;

  @IsString()
  @Length(6, 100)
  Password: string;

  @IsEnum(UserType)
  @IsOptional()
  userType?: UserType = UserType.CLIENT;

  @IsString()
  @Length(10, 15)
  PhoneNumber: string;

  @IsString()
  Provider: string;

  @IsString()
  @IsOptional()
  LanguagePreference?: string;

  @IsString()
  @IsOptional()
  ProfilePictureURL?: string;
}

export class UpdateClientDto {
  @IsString()
  @IsOptional()
  @Length(1, 100)
  Name?: string;

  @IsEmail()
  @IsOptional()
  Email?: string;

  @IsString()
  @IsOptional()
  @Length(6, 100)
  Password?: string;

  @IsEnum(UserType)
  @IsOptional()
  userType?: UserType;

  @IsString()
  @IsOptional()
  @Length(10, 15)
  PhoneNumber?: string;

  @IsString()
  @IsOptional()
  Provider?: string;

  @IsString()
  @IsOptional()
  LanguagePreference?: string;

  @IsString()
  @IsOptional()
  ProfilePictureURL?: string;
}


