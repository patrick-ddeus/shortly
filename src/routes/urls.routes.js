import { Router } from "express";
import UrlController from "../controllers/urls.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middlewares.js";
import { validPostUrl } from "../middlewares/urls.middlewares.js";

const UrlRouter = Router();

UrlRouter.post('/shorten', validPostUrl, AuthMiddleware, UrlController.postUrl);
UrlRouter.get('/:id', UrlController.getUrlById);

export default UrlRouter;