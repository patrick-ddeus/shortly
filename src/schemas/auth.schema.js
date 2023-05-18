import Joi from "joi";

const SignUpSchema = Joi.object({
    name: Joi.string().required().trim(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.valid(Joi.ref('password')).required().messages({
        'any.only': 'As senhas devem ser iguais',
    }),
});

export default SignUpSchema;