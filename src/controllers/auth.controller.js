import AuthRepository from "../repositories/auth.repository.js";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
    const { name, email, password } = req.user;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    try {
        await AuthRepository.register({ name, email, password: hash });

        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

const signIn = async (req, res) => {
    const { id, email, password, hashedPassword } = req.user;

    try {
        const isValidPassword = bcrypt.compareSync(password, hashedPassword);

        if (!isValidPassword) {
            return res.status(401).json({ message: "Email ou senha inválidos!" });
        }

        const token = await AuthRepository.generateToken({ id, email, password });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

export default {
    signUp,
    signIn
};