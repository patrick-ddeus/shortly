import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { validSignIn } from "../middlewares/auth.middlewares.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { SignInSchema } from "../schemas/auth.schema.js";

const SignInRouter = Router();

SignInRouter.post('/', validateSchema(SignInSchema), validSignIn, AuthController.signIn);

export default SignInRouter;