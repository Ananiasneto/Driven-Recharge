import db from "../database/database.conection";
import { RechargeData } from "../protocols/meusTipos";

export async function getRechargeById(phone_id: number) {     
    const result = await db.query<RechargeData>( 
        `SELECT * FROM recargas WHERE id = $1`, 
        [phone_id]
    );
    return result.rows;
    
}
