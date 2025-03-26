import { Request, Response } from "express";
import { cadastroPhone } from "../services/phone-services";
import { getTelefonesByDocumentRepository } from "../repositories/phone-repository";
import { PhoneData } from "../protocols/meusTipos";
import httpStatus from 'http-status';


export async function cadastrarPhone(req: Request, res: Response) : Promise<void>{
    const phoneData = req.body as PhoneData;
const result = await cadastroPhone(phoneData);
    try {
    
        
        res.status(httpStatus.CREATED).json(result);
    } catch (error) {
        console.log("entrou no catch")
        if (error.message.includes("CONFLITO")) {
            const errorMessage = error.message.split("CONFLITO:")[1].trim();
             res.status(httpStatus.CONFLICT).json({ 
                error: "Erro de conflito",
                message: errorMessage,
                details: "Verifique os dados e tente novamente"
            });
        }
        if (error.message === "NAO_ENCONTRADO") {
            res.status(httpStatus.NOT_FOUND).json({ 
                error: "Operadora não cadastrada" 
            });
        }
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function getTelefoneByDocument(req: Request, res: Response){
            const result = await getTelefonesByDocumentRepository(req,res);
            res.status(200).send(result);
    }