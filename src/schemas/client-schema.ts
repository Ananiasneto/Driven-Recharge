import joi from "joi";
import { ClientData } from "../protocols/meusTipos";

const clientSchema = joi.object<ClientData>({
    phones: joi.array().required(),
    cpf: joi.string().required(),
});

export default clientSchema;