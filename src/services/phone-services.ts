import { carrierExiste, createClient, getClientCpf, getCliente, inserirPhone, phoneExiste, phoneExisteBoolean } from "../repositories/phone-repository";
import { PhoneData } from "../protocols/meusTipos";
import { conflictError, invalidError } from "../erros/erros";

export async function cadastroPhone(phone: PhoneData) {
    let clientId = await getClientCpf(phone.cpf);
    
    if (!clientId) {
    clientId = await createClient(phone.cpf);
    } else {
    const numerosPhone = await phoneExiste(clientId);
    if (numerosPhone.length >= 3) {
        throw invalidError("Cliente já possui 3 telefones cadastrados");
    }
    }
    const cliente=await getCliente(clientId);
    for (const numero of cliente.phones) {
        if (await phoneExisteBoolean(numero)) {
            throw conflictError("Telefone");
        }
    }
    const carrierId = await carrierExiste(phone.carrier_name);
    if (!carrierId) {
        throw invalidError("Operadora");
    }
    
    const novoTelefone=await inserirPhone(phone,carrierId,clientId);
    return novoTelefone;
}
    
   




