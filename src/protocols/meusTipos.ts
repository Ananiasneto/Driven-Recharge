export type ClientData={
    cpf:string,
    phones:string[]
}
export type PhoneData={
    client_id: number,
    phone_numero: string,
    carrier_name: string,
    descricao: string,
    name:string,
    cpf:string
}
export type RechargeData={
    phone_id: number,
    amount: number
}