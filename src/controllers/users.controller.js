import UrlsRepositories from "../repositories/urls.repositories.js";



const getUserUrls = async (req, res) => {
    const { id } = req.locals;

    try {
        const { rows } = await UrlsRepositories.getUrlsFromUser(id);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    getUserUrls
};