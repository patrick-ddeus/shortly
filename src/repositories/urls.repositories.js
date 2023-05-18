import { db } from "../database/connect.js";

class UrlRepository {
    constructor() {
        this.db = db;
    }

    postUrl(url, shortUrl, idUsuario) {
        const query = `INSERT INTO urls (url, short_url, id_usuario) VALUES ($1, $2, $3)`;
        return this.db.query(query, [url, shortUrl, idUsuario]);
    }
}

export default new UrlRepository;