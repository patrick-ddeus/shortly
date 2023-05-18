import { db } from "../database/connect.js";

class UrlRepository {
    constructor() {
        this.db = db;
    }

    postUrl(url, shortUrl, idUsuario) {
        const query = `INSERT INTO urls (url, short_url, id_usuario) VALUES ($1, $2, $3) RETURNING id`;
        return this.db.query(query, [url, shortUrl, idUsuario]);
    }

    getUrlById(id) {
        const query = `SELECT id, short_url AS shortUrl, url FROM urls WHERE id=$1`;
        return this.db.query(query, [id]);
    }

    getUrlByShortUrl(shortUrl) {
        const query = `SELECT url FROM urls WHERE short_url=$1`;
        return this.db.query(query, [shortUrl]);
    }
}

export default new UrlRepository;