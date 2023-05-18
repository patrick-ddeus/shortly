import sanitizeObjects from "../helpers/sanitizeObjects.js";
import AuthRepository from "../repositories/auth.repository.js";
import { SignUpSchema, SignInSchema } from "../schemas/auth.schema.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const AuthMiddleware = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: " Campo authorization inválido" });
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
        return res.status(401).json({ message: " Campo authorization inválido" });
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
        return res.status(401).json({ message: " Campo authorization inválido" });
    }

    try {
        jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
            if (error) {
                return res.status(401).json({ message: " Campo authorization inválido" });
            }

            req.locals = { id: decode.id };
            return next();
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const validSignUp = async (req, res, next) => {
    const { name, email, password } = sanitizeObjects(req.body);

    try {
        const { rows } = await AuthRepository.login(email);

        if (rows[0]) {
            return res.status(409).json({ message: "Email já cadastrado!" });
        }

        req.user = { name, email, password };

        return next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const validSignIn = async (req, res, next) => {
    const { email, password } = sanitizeObjects(req.body);

    try {
        const { rows } = await AuthRepository.login(email);

        if (!rows[0]) {
            return res.status(401).json({ message: "Email ou senha inválidos!" });
        }

        req.user = {
            email,
            password,
            id: rows[0].id,
            hashedPassword: rows[0].password
        };

        return next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

