import { PersonEntity } from "../entities/person.entity";
import { UserEntity } from "../entities/user.entity";
import { IUser } from "../interfaces/user/user.interface";

export class ReturnUserDto implements IUser  {
    username: string;
    email: string;    
    typeUser: number;    
    password: string;
    status: boolean;
    resetPasswordToken: string;
    activationAccount: boolean;
    activationCode: string;
    profile?: PersonEntity; 

    constructor(userEntity: UserEntity) {
        this.username = userEntity ? userEntity.username : null;
        this.email =  userEntity ? userEntity.email : null;
        this.typeUser =  userEntity ? userEntity.typeUser : null;
        this.password =  null;
        this.status =  userEntity ? userEntity.status : null;
        this.resetPasswordToken  =  userEntity ?  userEntity.resetPasswordToken : null;
        this.activationAccount  =  userEntity ?  userEntity.activationAccount : null;
        this.activationCode  =  userEntity ?  userEntity.activationCode : null;

        this.profile =  userEntity ? (userEntity.profile 
            ? userEntity.profile = userEntity.profile
            : undefined) : undefined;
    }
}
