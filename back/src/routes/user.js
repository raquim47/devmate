import express from 'express';
import User from '../models/user';
import setUserToken from '../utils/set-user-token';
import bcrypt from 'bcrypt';
import buildResponse from '../utils/build-response';
import errorHandler from '../utils/errorHandler';
import { ERROR } from '../utils/constants';

const router = express.Router();

// 로그인 상태 가져오기
router.get(
  '/me',
  errorHandler(async (req, res) => {
    if (req.user) {
      const user = await User.findById(req.user._id).select('-password -joinGroup -wishGroup');
      if (!user) {
        return res.status(404).json(buildResponse(null, ERROR.USER_NOT_FOUND));
      }

      return res.json(buildResponse({ isAuth: true, ...user }));
    } else {
      const defaultData = {
        isAuth: false,
        isAdmin: false,
      };
      return res.json(buildResponse(defaultData));
    }
  })
);

// 로그인
router.post(
  '/login',
  errorHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json(buildResponse(null, ERROR.EMAIL_NOT_FOUND));
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json(buildResponse(null, ERROR.PASSWORD_INVALID));
    }

    setUserToken(res, user);
    const authStatus = { isAuth: true, isAdmin: user.isAdmin };
    res.json(buildResponse(authStatus));
  })
);

// 회원가입
router.post(
  '/signup',
  errorHandler(async (req, res) => {
    const { email, username, password } = req.body;
    const existingUser = await User.findOne({ email });
    const hashedPassword = await bcrypt.hash(password, 10);

    if (existingUser) {
      return res.status(409).json(buildResponse(null, ERROR.EMAIL_DUPLICATE));
    }

    await User.create({
      email,
      username,
      password: hashedPassword,
    });

    res.json(buildResponse());
  })
);

export default router;
