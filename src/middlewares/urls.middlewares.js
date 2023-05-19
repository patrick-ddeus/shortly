import UrlsRepositories from "../repositories/urls.repositories.js";
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

export const validDelete = async (req, res, next) => {
    const { id } = req.params;
    const { id: userId } = req.locals;

    try {
        const { rows } = await UrlsRepositories.getUrlById(id);

        if (!rows.length) {
            return res.status(404).json({ message: "Url inexistente" });
        }

        if (Number(rows[0].id_usuario) !== Number(userId)) {
            return res.sendStatus(401);
        }

        if (!rows[0].shortUrl) {
            return res.status(404).json({ message: "Url não encontrada" });
        }

        return next()

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};