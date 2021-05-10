import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  // ! 세션 사용할 때
  // async canActivate(context: ExecutionContext) {
  //   const result = (await super.canActivate(context)) as boolean;
  //   const request = context.switchToHttp().getRequest();
  //   await super.logIn(request);
  //   return result;
  // }
}
