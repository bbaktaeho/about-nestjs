import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'tttt',
    });
  }

  async validate(payload: any) {
    console.log(0, 'JwtStrategy.validate', 'payload:', payload);

    // todo: 데이터베이스에서 유저 찾기!
    return {
      id: payload.sub,
      name: payload.name,
    };
  }
}
