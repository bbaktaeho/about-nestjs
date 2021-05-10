import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: User, done: (err: Error, user: any) => void): any {
    done(null, user);
  }

  deserializeUser(payload: any, done: (err: Error, payload: string) => void) {
    done(null, payload);
  }
}
