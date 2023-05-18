import UrlSchema from "../schemas/url.schema.js";

export const validPostUrl = async (req, res, next) => {
    const { url } = req.body;
    const { error } = UrlSchema.validate({ url });

    if (error) {
        const errors = error.details.map(err => err.message);
        return res.status(422).json(errors);
    }

    return next();
}; 