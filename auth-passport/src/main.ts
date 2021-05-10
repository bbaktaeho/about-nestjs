import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// todo
import session from 'express-session';
import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * ! 세션 사용할 때 미들웨어 등록
   app.use(
     session({
       secret: 'tttt',
       resave: false,
       saveUninitialized: false,
       cookie: { maxAge: 3600000 },
     }),
   );
 
   app.use(passport.initialize());
   app.use(passport.session());
   */

  await app.listen(3000);
}
bootstrap();
