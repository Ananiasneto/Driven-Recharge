import joi from "joi";

export const rechargeSchema = joi.object({
    phone_id: joi.number().required(),
    amount: joi.number().min(10).max(1000).required()
});