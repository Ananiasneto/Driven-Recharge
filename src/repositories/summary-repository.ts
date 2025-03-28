
import { CarriersData, ClientData, PhoneData, RechargeData } from "../protocols/meusTipos";
import db from "../database/database.conection";


export async function getNumerosCpfRepository(document: string){
    const result = await db.query<ClientData>(`
        SELECT * FROM client WHERE cpf = $1
    `, [document]);
    return result.rows[0];
}

export async function getCarrierByNumeroRepository(phone: string){
    const result = await db.query<PhoneData>(`
        SELECT * FROM phone WHERE numero = $1
    `, [phone]);    
    return result.rows[0].carrier_id;
}
export async function getCarrierByIdRepository(carrier_id: number){
    const result = await db.query<CarriersData>(`
        SELECT * FROM carriers WHERE id = $1
    `, [carrier_id]);
    return result.rows[0];
}
export async function getPhoneByNumeroRepository(phone: string){
    const result = await db.query<PhoneData>(`
        SELECT * FROM phone WHERE numero = $1
    `, [phone]);
    return result.rows[0];
}
export async function getRechargeByNumerosRepository(phone_id: number){
    const result = await db.query<RechargeData>(`
        SELECT * FROM recargas WHERE phone_id = $1
    `, [phone_id]);
    return result.rows;
}
