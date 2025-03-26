import { carrierExiste, createClient, getClientCpf, getCliente, getPhones, inserirPhone,phoneExisteBoolean } from "../repositories/phone-repository";
import { PhoneData } from "../protocols/meusTipos";
import { Request, Response } from "express";
import httpStatus from 'http-status';



export async function cadastroPhone(req:Request,res:Response) {
    const phone=req.body as PhoneData;
    let clientId = await getClientCpf(phone.cpf);
    
    if (!clientId) {
    clientId = await createClient(phone.cpf);
    } else {
        const numerosPhone = await getPhones(clientId);
        
        if (numerosPhone.length >= 3) {
            return res.status(httpStatus.CONFLICT)
          .send("Limite máximo de 3 telefones por cliente atingido");
        }
    }
    const cliente=await getCliente(clientId);
        if (cliente.includes(phone.phone_numero)) {
            return res.status(httpStatus.CONFLICT).send("esse número já existe");
        }
    
    const carrierId = await carrierExiste(phone.carrier_name);
    if (!carrierId) {
        return res.status(httpStatus.NOT_FOUND).send("operadora não existe");
    }
    const novoTelefone=await inserirPhone(phone,carrierId,clientId);
    return novoTelefone;

}
