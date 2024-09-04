// import { IsOptional, IsString } from 'class-validator';
import { IUser } from '../interfaces/user/user.interface';
import { PersonEntity } from '../entities/person.entity';
import { IsString, IsInt, MinLength, MaxLength, IsOptional } from 'class-validator';

export class CreateUserDto implements IUser {

    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsOptional()
    typeUser: number;

    @IsOptional()
    status: boolean;

    @IsOptional()
    resetPasswordToken: string;

    @IsOptional()
    activationAccount: boolean;

    @IsOptional()
    activationCode: string;  

    @IsOptional()
    profile: PersonEntity;  

}
