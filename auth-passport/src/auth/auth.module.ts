import { Module } from '@nestjs/common';
// ! jwt 사용
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
// ! 세션 사용할 때 provider등록
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    // !세션 사용할 때
    // PassportModule.register({ session: true })
    JwtModule.register({ secret: 'tttt', signOptions: { expiresIn: '60s' } }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
