import { ClientData, PhoneData } from "../protocols/meusTipos";
import db from "../database/database.conection";
import { Request, Response } from "express";

export async function getClientCpf(cpf: string) {
    const result = await db.query< {id: number} >(`
        SELECT id FROM client WHERE cpf = $1
    `, [cpf]);

    return result.rows[0]?.id ?? null;
}
export async function getCliente(clienteId:number) {
    const result = await db.query< ClientData >(`
        SELECT * FROM client WHERE id = $1
    `, [clienteId]);
        
    return result.rows[0].phones;
}
export  async function createClient(cpf: string) {
    const result = await db.query<{ id: number }>(`
        INSERT INTO client (cpf,phones) 
        VALUES ($1,$2)
        RETURNING id
    `, [cpf,[]]);

    return result.rows[0].id;
}
export async function getPhones(clientId: number) {
    const result = await db.query<{ phones: string[] }>( 
        `SELECT phones FROM client WHERE id = $1`, 
        [clientId]
    );
    
    return result.rows[0]?.phones || []; 
}

export async function phoneExisteBoolean(numero: string) {
    const result = await db.query(
        `SELECT * FROM phone WHERE numero = $1`, 
        [numero]
    );
    return result.rows[0].length > 0;
}
export async function carrierExiste(carrierName: string) {
    const result = await db.query<{ id: number }>(`
        SELECT id FROM carriers WHERE name = $1
    `, [carrierName]);
    if (result.rows.length === 0) {
        return null
    }
    return result.rows[0].id;
}

export async function inserirPhone( phone: PhoneData,carrierId:number,client_id:number) {
    await db.query<ClientData>(
        `UPDATE client 
         SET phones = array_append(phones, $1) 
         WHERE id = $2
         RETURNING *
         `
         ,
        [phone.phone_numero, client_id]
    );
    const result=  await db.query<PhoneData>(
            `INSERT INTO phone (
                client_id,
                carrier_id,
                numero,
                name,
                descricao
            ) VALUES ($1, $2, $3, $4, $5)
            RETURNING *`, 
            [
                client_id,
                carrierId,
                phone.phone_numero,
                phone.name,
                phone.descricao
            ]
        );
   
        return result.rows[0];
    }

    export async function getTelefonesByDocumentRepository(req:Request,res:Response){
        const cpf = req.params.document;
        const result = await db.query<{cpf: string}>(`
           SELECT numero 
           FROM phone 
           JOIN client ON phone.client_id = client.id
           WHERE client.cpf = $1
       `, [cpf]);
       return result.rows;
       
};
