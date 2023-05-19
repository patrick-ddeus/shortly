import { Router } from "express";
import UsersController from "../controllers/users.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middlewares.js";
const UserRouter = Router();

UserRouter.get('/me', AuthMiddleware, UsersController.getUserUrls);

export default UserRouter;