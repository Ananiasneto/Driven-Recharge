import joi from "joi";

export const rechargeSchema = joi.object({
    phone_number: joi.string().required(),
    valor: joi.number().min(10).max(1000).required()
});