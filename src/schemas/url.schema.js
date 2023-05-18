import Joi from "joi";

const UrlSchema = Joi.object({
    url: Joi.string().required().trim(),
});

export default UrlSchema;