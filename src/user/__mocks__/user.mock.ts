import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/user-type.enum";

export const userEntityMock: UserEntity = {
    createdAt: new Date(),
    email: 'email@test.com',
    id: 1,
    username: 'user one',
    password: '$2b$10$YR5YYlIjUoVB9mUBtEVSD.O138kXxrsXQiQ8.8xjJ1bcQ.uj2EZ96',
    typeUser: UserType.Admin,
    updatedAt: new Date(),
    status: true,
    resetPasswordToken: "",
    activationAccount: false,
    activationCode: ""
}
