import UrlRepository from "../repositories/urls.repositories.js";
import { nanoid } from 'nanoid';

const postUrl = async (req, res) => {
    const { url } = req.body;
    const { id } = req.locals;
    const shortUrl = nanoid();

    try {
        const { rows } = await UrlRepository.postUrl(url, shortUrl, id);

        res.status(201).json({
            id: rows[0].id,
            shortUrl,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUrlById = async (req, res) => {
    const { id } = req.params;

    try {
        const { rows } = await UrlRepository.getUrlById(id);

        if (!rows.length) {
            return res.status(404).json({ message: "Url inexistente" });
        }

        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    postUrl,
    getUrlById
};