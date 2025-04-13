import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { ExceptionMessage } from '../../utils/exception-message.enum';

@Injectable()
export class DisabledPersonGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user?.hasDisability) {
            throw new ForbiddenException(
                ExceptionMessage.ONLY_DISABLED_PERSON_CAN_CHANGE_RATE
            );
        }
        return true;
    }
}