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
        const query = `SELECT id, short_url AS "shortUrl", url, id_usuario FROM urls WHERE id=$1`;
        return this.db.query(query, [id]);
    }

    getUrlByShortUrl(shortUrl) {
        const query = `SELECT id, short_url AS "shortUrl", url, id_usuario FROM urls WHERE short_url=$1`;
        return this.db.query(query, [shortUrl]);
    }

    deleteById(id) {
        const query = `DELETE FROM urls WHERE id=$1 RETURNING short_url`;
        return this.db.query(query, [id]);
    }

    getUrlsFromUser(id) {
        const query = `SELECT
        u.id,
        u.name,
        SUM(ur.visit_count) AS "visitCount",
        json_agg(json_build_object(
          'id', ur.id,
          'shortUrl', ur.short_url,
          'url', ur.url,
          'visitCount', ur.visit_count
        ) ORDER BY ur.id) AS "shortenedUrls"
      FROM users u
       LEFT JOIN urls ur ON u.id = ur.id_usuario
       WHERE u.id=$1
      GROUP BY
        u.id, u.name;`;

        return this.db.query(query, [id]);
    }

    updateUrl(shortUrl) {
        const query = `UPDATE urls SET visit_count = visit_count + 1 WHERE short_url=$1 `;
        return this.db.query(query, [shortUrl]);
    }

    ranking() {
        const query = `
        SELECT
            u.id as id,
            u.name as name,
            COUNT(ur.id) as "linksCount",
            SUM(ur.visit_count) as "visitCount"
        FROM users u
        LEFT JOIN urls ur
        ON u.id = ur.id_usuario
        GROUP BY
        u.id
        ORDER BY
        "visitCount" DESC
        LIMIT 10;`;

        return this.db.query(query);
    }

}

export default new UrlRepository;