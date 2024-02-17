import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { JwtService } from '@nestjs/jwt';
import { LoginPayloadDto } from '../auth/dto/login-payload.dto';

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(
        private reflector: Reflector,
        private readonly jwtService: JwtService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const requiredRoles = this.reflector.getAllAndOverride<UserType[]>(
            ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles) {
            return true;
        }        

        // verificar authorization
        const { authorization } = context.switchToHttp().getRequest().headers;

        const loginPayload: LoginPayloadDto | undefined = 
            await this.jwtService.verifyAsync(authorization, {
                secret: process.env.JWT_SECRET
            }).catch(() => undefined);

        if (!loginPayload) {
            return false;
        }

        console.log(">>> from guards: authorization :: ", authorization);

        return requiredRoles.some((role) => role === loginPayload.typeUser);
        // return requiredRoles.some((role) => user.roles?.includes(role));
    }
}
