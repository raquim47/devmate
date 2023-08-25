import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';
import dotenv from 'dotenv';

dotenv.config();

const cookieExtractor = req => {
  return req.cookies.token;
};

const opts = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: cookieExtractor,
};

const initPassport = () => {
  passport.use(new JwtStrategy(opts, (user, done) => {
    done(null, user);
  }));
};

export default initPassport;