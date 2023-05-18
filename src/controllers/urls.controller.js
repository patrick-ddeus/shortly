import UrlRepository from "../repositories/urls.repositories.js";
import { nanoid } from 'nanoid';

const postUrl = async (req, res) => {
    const { url } = req.body;
    const { id } = req.locals;
    const shortUrl = nanoid();

    try {
        await UrlRepository.postUrl(url, shortUrl, id);

        res.status(201).json({
            id: id,
            shortUrl
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    postUrl
};