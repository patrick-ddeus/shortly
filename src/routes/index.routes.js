import { Router } from "express";
import UrlController from "../controllers/urls.controller.js";
import SignInRouter from "./signin.routes.js";
import SignUpRouter from "./signup.routes.js";
import UrlRouter from "./urls.routes.js";
import UserRouter from "./users.routes.js";

const IndexRouter = Router();

IndexRouter.use('/signup', SignUpRouter);
IndexRouter.use('/signin', SignInRouter);
IndexRouter.use('/urls', UrlRouter);
IndexRouter.use('/users', UserRouter);
IndexRouter.use('/ranking', UrlController.ranking);
export default IndexRouter;