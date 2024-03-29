import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { ReturnLoginDto } from '../dto/return-login.dto';
import { LoginDto } from '../dto/login.dto';

describe('AuthController', () => {
    let controller: AuthController;
    let authService: AuthService;

    const loginDto: LoginDto = {
        email: "jaime@test.com",
        password: "pass"
    }

    const returnLoginDto: ReturnLoginDto = {
        user: {
            username: "test",
            email: "test@test.com",
            typeUser: 1,
            password: '',
            status: false,
            resetPasswordToken: '',
            activationAccount: false,
            activationCode: ''
        },
        accessToken: "token"
    }

    const AuthServiceMock = {
        login: jest.fn().mockReturnValue(returnLoginDto)
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [
                {
                    provide: AuthService,
                    useValue: AuthServiceMock
                }
            ]
        }).compile();

        controller = module.get<AuthController>(AuthController);
        authService = module.get<AuthService>(AuthService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should be login access', async () => {
        const result = await controller.login(loginDto)
        expect(authService.login).toHaveBeenCalled();
        expect(result).toEqual(returnLoginDto)
    });    
});
