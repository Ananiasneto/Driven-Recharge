import { getPhonesIdRepository } from "../repositories/phone-repository";
import { RechargeData } from "../protocols/meusTipos";
import { insereRechargeBd, numeroExist } from "../repositories/recharge-repository";

export async function numeroExiste(phone_id: number) {
    const numeroExiste = await numeroExist(phone_id);
    if (!numeroExiste) {
        throw new Error("NAO_ENCONTRADO")
    }
}
export async function getPhonesId(phone_numero: string) : Promise<number> {
    const rechargeExiste = await getPhonesIdRepository(phone_numero);
    if (!rechargeExiste) {
        throw new Error("NAO_ENCONTRADO")
    }
    return rechargeExiste;
}
export async function insereRecharge(recharge:RechargeData):Promise<RechargeData> {
    const result=await insereRechargeBd(recharge);
    return result;

}