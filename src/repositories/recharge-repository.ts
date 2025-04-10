import db from "../database/database.conection";
import { PhoneData, RechargeData } from "../protocols/meusTipos";

export async function getRechargeById(phone_id: number) {     
    const result = await db.query<RechargeData>( 
        `SELECT * FROM recargas WHERE phone_id = $1`, 
        [phone_id]
    );
    return result.rows;
    
}
export async function numeroExist(phone_id: number) {
    const result = await db.query<PhoneData>(`
        select * from phone where id=$1
    `, [phone_id]);
    return result.rows.length > 0;
}
export async function insereRechargeBd(recharge: RechargeData) {
    const result = await db.query<RechargeData>(`
        INSERT INTO recargas (phone_id, amount)
        VALUES ($1, $2)
        RETURNING *
    `, [recharge.phone_id, recharge.amount]);
    return result.rows[0];
}