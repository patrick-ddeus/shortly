import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { validSignUp } from "../middlewares/auth.middlewares.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { SignUpSchema } from "../schemas/auth.schema.js";

const SignUpRouter = Router();

SignUpRouter.post('/', validateSchema(SignUpSchema), validSignUp, AuthController.signUp);

export default SignUpRouter;