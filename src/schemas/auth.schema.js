import Joi from "joi";

export const SignUpSchema = Joi.object({
    name: Joi.string().required().trim(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.valid(Joi.ref('password')).required().messages({
        'any.only': 'As senhas devem ser iguais',
    }),
});

export const SignInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
