import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { ExceptionMessage } from '../../utils/exception-message.enum';

@Injectable()
export class WithoutDisabilityGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (user?.hasDisability) {
            throw new ForbiddenException(
                ExceptionMessage.ONLY_PERSON_WITHOUT_DISABILITY_CAN_ADD_SUGGESTION
            );
        }
        return true;
    }
}