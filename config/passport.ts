import passport from 'passport';
import { localStrategy } from '../utils/auth/local.strategy';
import { jwtStrategy } from '../utils/auth/jwt.strategy';

passport.use(
  'login',
  localStrategy
);

passport.use(
  jwtStrategy
);