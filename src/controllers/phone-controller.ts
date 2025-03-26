import { NextFunction, Request, Response } from "express";
import { cadastroPhone } from "../services/phone-services";
import { PhoneData } from "../protocols/meusTipos";
import httpStatus from 'http-status';


export async function cadastrarPhone(req:Request,res:Response){
        await cadastroPhone(req,res);
        res.sendStatus(httpStatus.CREATED);
    
}