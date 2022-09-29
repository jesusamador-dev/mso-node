import { Request, Response, Router } from "express";
import { AppError } from "../app/models/AppError";
import User from "../app/interfaces/User";
import passport from 'passport';
import jwt from 'jsonwebtoken';

const routes = Router();

routes.post(
  '/login',
  async (req: Request, res: Response, next) => {
    passport.authenticate(
      'login',
      async (err, user: User, done) => {
        try {
          if (err || !user) {
            throw new AppError(done);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);
              const token = jwt.sign({ user: user }, 'TOP_SECRET');
              return res.json({ token });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

export const AuthRoutes = routes;
