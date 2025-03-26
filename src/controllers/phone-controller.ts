import { Request, Response } from "express";
import { cadastroPhone } from "../services/phone-services";
import httpStatus from 'http-status';
import { getTelefonesByDocumentRepository } from "../repositories/phone-repository";


export async function cadastrarPhone(req:Request,res:Response){
        await cadastroPhone(req,res);
        res.sendStatus(httpStatus.CREATED);
    
}
export async function getTelefoneByDocument(req: Request, res: Response){
        
            const result = await getTelefonesByDocumentRepository(req,res);
            res.status(200).send(result);
    }