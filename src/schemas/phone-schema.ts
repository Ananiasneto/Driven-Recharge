import joi from "joi";

const phoneSchema = joi.object({
    phone_numero: joi.string().min(1).max(11).required(),
    descricao: joi.string().required(),
    name: joi.string().required(),
    cpf: joi.string().required(),
    carrier_name: joi.string().required()
});

export default phoneSchema;