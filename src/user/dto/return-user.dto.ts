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
        // this.id = userEntity.id; 
        this.username = userEntity.username;
        this.email = userEntity.email;
        this.typeUser = userEntity.typeUser;
        this.password = null;
        this.status = userEntity.status;
        this.resetPasswordToken  =  userEntity.resetPasswordToken;
        this.activationAccount  =  userEntity.activationAccount;
        this.activationCode  =  userEntity.activationCode;

        this.profile = userEntity.profile 
            ? userEntity.profile = userEntity.profile
            : undefined;        
    }
}
