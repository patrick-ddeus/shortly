import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { validSignUp } from "../middlewares/auth.middlewares.js";

const SignUpRouter = Router();

SignUpRouter.post('/', validSignUp, AuthController.signUp);

export default SignUpRouter;