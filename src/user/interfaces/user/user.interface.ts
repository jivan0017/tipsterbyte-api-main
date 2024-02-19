import { PersonEntity } from "../../../user/entities/person.entity";

export interface IUser {
    username: string;
    email: string;
    password: string;
    typeUser: number;
    status: boolean;
    resetPasswordToken: string;
    activationAccount: boolean;
    activationCode: string;
    profile?: PersonEntity;
}
