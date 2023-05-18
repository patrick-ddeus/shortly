import sanitizeObjects from "../helpers/sanitizeObjects.js";
import AuthRepository from "../repositories/auth.repository.js";
import SignUpSchema from "../schemas/auth.schema.js";

export const validSignUp = async (req, res, next) => {
    const { name, email, password, confirmPassword } = sanitizeObjects(req.body);

    const { error } = SignUpSchema.validate({
        name, email, password, confirmPassword
    });

    if (error) {
        const errors = error.details.map(err => err.message);
        return res.status(422).json(errors);
    }

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