import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsAlphanumeric, IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { PersonEntity } from '../entities/person.entity';


export class UpdateUserDto extends PartialType(CreateUserDto) {

    id?: number;

    @IsString()
    @IsOptional()
    username: string;
  
    @IsAlphanumeric()
    @IsOptional()
    @MinLength(8)
    password: string;
  
    @IsEmail()
    @IsOptional()
    email: string;

    @IsOptional()
    profile: PersonEntity;
}
