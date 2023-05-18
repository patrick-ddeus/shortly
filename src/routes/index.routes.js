import { Router } from "express";
import SignInRouter from "./signin.routes.js";
import SignUpRouter from "./signup.routes.js";
import UrlRouter from "./urls.routes.js";

const IndexRouter = Router();

IndexRouter.use('/signup', SignUpRouter);
IndexRouter.use('/signin', SignInRouter);
IndexRouter.use('/urls', UrlRouter);

export default IndexRouter