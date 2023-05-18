import UrlRepository from "../repositories/urls.repositories.js";
import { nanoid } from 'nanoid';

const postUrl = async (req, res) => {
    const { url } = req.body;
    const shortUrl = nanoid();

    try {
        await UrlRepository.postUrl(url, shortUrl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};