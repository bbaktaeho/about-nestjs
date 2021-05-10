import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard) // 인증가드를 통해서 인증 전략의 validate를 실행하고 req.user 객체가 생성됨
  @Post('login')
  login(@Req() req: Request) {
    console.log(2, 'controller.login', 'user:', req.user);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard) // req.user를 만들어줌
  // @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getUser(@Req() req: Request) {
    console.log(1, 'controller.getUser', 'user:', req.user);
    return req.user;
  }
}
