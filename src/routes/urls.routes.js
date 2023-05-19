import { Router } from "express";
import UrlController from "../controllers/urls.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middlewares.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { validDelete } from "../middlewares/urls.middlewares.js";
import UrlSchema from "../schemas/url.schema.js";

const UrlRouter = Router();

UrlRouter.post('/shorten', validateSchema(UrlSchema), AuthMiddleware, UrlController.postUrl);
UrlRouter.get('/:id', UrlController.getUrlById);
UrlRouter.delete('/:id', AuthMiddleware, validDelete, UrlController.deleteById);
UrlRouter.get('/open/:shortUrl', UrlController.redirectToLink);

export default UrlRouter;