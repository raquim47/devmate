import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import getUserFromJWT from './middlewares/get-user-jwt';
import dotenv from 'dotenv';
import initPassport from './passport';
import indexRoutes from './routes';

dotenv.config();
initPassport();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// passport/jwt
app.use(passport.initialize());
app.use(getUserFromJWT);

// routes
app.use(indexRoutes);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('DB 연결');
  })
  .catch((err) => {
    console.error('Mongoose error:', err);
    process.exit(1);
  });

app.listen(process.env.PORT, () => {
  console.log(`서버 실행, 포트 : ${process.env.PORT}`);
});
