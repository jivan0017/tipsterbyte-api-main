import { ReturnUserDto } from "../dto/return-user.dto";

export const returnUserDtoMock: ReturnUserDto = {
    username: "test",
    email: "test@test.com",
    typeUser: 1,
    password: "",
    status: false,
    resetPasswordToken: "",
    activationAccount: false,
    activationCode: ""
}
