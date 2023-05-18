import { db } from "../database/connect.js";

class UrlRepository {
    constructor() {
        this.db = db;
    }

    postUrl(url, shortUrl) {
        const query = `INSERT INTO urls (url, short_url) VALUES ($1, $2)`;
        return this.db.query(query, [url, shortUrl]);
    }
}

export default new UrlRepository;