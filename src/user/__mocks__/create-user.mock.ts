import { CreateUserDto } from "../dto/create-user.dto";
import { PersonEntity } from "../entities/person.entity";

export const createUserMock: CreateUserDto = {
    email: 'email@test.com',
    username: 'name',
    password: 'password',
    typeUser: 0,
    status: false,
    resetPasswordToken: "",
    activationAccount: false,
    activationCode: "",
    profile: undefined,
}
