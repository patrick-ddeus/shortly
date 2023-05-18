import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { validSignIn } from "../middlewares/auth.middlewares.js";

const SignInRouter = Router();

SignInRouter.post('/', validSignIn, AuthController.signIn);

export default SignInRouter;