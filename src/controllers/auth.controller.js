import AuthRepository from "../repositories/auth.repository.js";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
    const { name, email, password } = req.user;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    try {
        await AuthRepository.register({ name, email, password: hash });
        
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

export default {
    signUp
};