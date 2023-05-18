import { db } from "../database/connect.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

class AuthRepository {
    constructor() {
        this.db = db;
    }

    login(email) {
        const query = "SELECT id, email, password FROM users WHERE email=$1";
        return db.query(query, [email]);
    }

    register(reqParams) {
        const { name, email, password } = reqParams;
        const query = "INSERT INTO users (name, email, password) VALUES($1, $2, $3)";
        return db.query(query, [name, email, password]);
    }

    generateToken(payload) {
        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 864000 });
    }
}

export default new AuthRepository;