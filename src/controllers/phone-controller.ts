import { NextFunction, Request, Response } from "express";
import { PhoneData } from "../protocols/meusTipos";
import { cadastroPhone } from "../services/phone-services";


export async function cadastrarPhone(req:Request,res:Response,next:NextFunction){
    const phone=req.body as PhoneData;
    try {
        await cadastroPhone(phone);
        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
}