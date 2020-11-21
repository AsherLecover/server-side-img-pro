import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { role } from './auth-role.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,

  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = {
      username: 'asher',
      email: 'asherlec5@gmail.com',
      roles: role.ADMIN
    };
    const requiredRoles = role.ADMIN;
    if (!user.roles.includes(requiredRoles)) {

      return false
    }
    return true;
  }
}
