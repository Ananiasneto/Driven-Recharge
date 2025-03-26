import { carrierExiste, createClient, getClientCpf, getCliente, getPhones, inserirPhone,phoneExisteBoolean } from "../repositories/phone-repository";
import { PhoneData } from "../protocols/meusTipos";


export async function cadastroPhone(phone:PhoneData) {
    let clientId = await getClientCpf(phone.cpf);
    console.log("entrou no service")
    if (!clientId) {
    clientId = await createClient(phone.cpf);
    } else {
        const numerosPhone = await getPhones(clientId);
        
        if (numerosPhone.length >= 3) {
            console.log("eh pra disparar o erro")
            throw new Error("CONFLITO: Limite de 3 números por usuário foi atingido");
        }
    }
    const cliente=await getCliente(clientId);
        if (cliente.includes(phone.phone_numero)) {
            console.log("eh pra disparar o erro")
            throw new Error("CONFLITO: Este número de telefone já está cadastrado ");
        }
    
    const carrierId = await carrierExiste(phone.carrier_name);
    if (!carrierId) {
        console.log("eh pra disparar o erro")
        throw new Error("NAO_ENCONTRADO");
    }
    const novoTelefone=await inserirPhone(phone,carrierId,clientId);
    return novoTelefone;

}