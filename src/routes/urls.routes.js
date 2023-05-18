import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth.middlewares.js";

const UrlRouter = Router()

UrlRouter.post('/shorten', AuthMiddleware)

export default UrlRouter