import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { validSignUp } from "../middlewares/auth.middlewares.js";

const AuthRouter = Router()

AuthRouter.post('/', validSignUp, AuthController.signUp)

export default AuthRouter