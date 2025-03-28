
import { getCarrierByIdRepository, getCarrierByNumeroRepository, getNumerosCpfRepository, getPhoneByNumeroRepository, getRechargeByNumerosRepository } from "../repositories/summary-repository";


export async function getNumerosCpf(document:string) {
    const result=await getNumerosCpfRepository(document);
    if(!result){
        
        throw new Error("NAO_ENCONTRADO");
    }
      return result;  


}
export async function getCarrierByNumero(phone:string) {
    const result=await getCarrierByNumeroRepository(phone);

    return result;

}
export async function getCarrierById(carrier_id:number) {
    const result=await getCarrierByIdRepository(carrier_id);
    return result;

}
export async function getPhoneByNumero(phone:string) {
    const result=await getPhoneByNumeroRepository(phone);
    return result;

}
export async function getRechargeByNumeros(phone_id:number) {
    const result=await getRechargeByNumerosRepository(phone_id);
    return result;

}
