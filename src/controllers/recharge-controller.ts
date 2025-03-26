import { Request, Response } from "express";
import httpStatus from 'http-status';


export async function getRechargeByNumero(req:Request,res:Response){
        
        res.sendStatus(httpStatus.CREATED);
    
}
export async function postRecharge(req: Request, res: Response){
            res.status(200).send(httpStatus.CREATED);
    }