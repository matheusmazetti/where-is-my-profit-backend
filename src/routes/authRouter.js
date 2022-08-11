import { Router } from 'express';
import { insertNewUser, login } from '../controllers/authController.js';
import { loginMiddleware, newUserMiddleware } from '../middlewares/authMiddlewares.js';

const authRouter = Router();

authRouter.post("/signup", newUserMiddleware, insertNewUser);
authRouter.post("/login", loginMiddleware, login);

export default authRouter;