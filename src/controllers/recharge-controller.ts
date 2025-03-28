import { Request, Response } from "express";
import httpStatus from 'http-status';
import { getRechargeById } from "../repositories/recharge-repository";
import { RechargeData } from "../protocols/meusTipos";
import { getPhonesId, insereRecharge, numeroExiste } from "../services/recharge-services";


export async function getRechargeByNumero(req: Request, res: Response) {
    const phone_numero: string = req.params.number;
    
        try {
          
        const phoneId = await getPhonesId(phone_numero);
        const recharges = await getRechargeById(phoneId);

            res.status(200).send(recharges);
        } catch (error) {
            if (error.message === "NAO_ENCONTRADO") {
                res.status(httpStatus.NOT_FOUND).json({
                  error: "numero de telefone não cadastrado",
                });
              } else{ 
                res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
export async function postRecharge(req: Request, res: Response): Promise<void>{
    const rechargeData = req.body as RechargeData;

    try {
        await numeroExiste(rechargeData.phone_id);
        const result=await insereRecharge(rechargeData);
        
        res.status(httpStatus.CREATED).json(result);
        
    } catch (error) {
         if (error.message === "NAO_ENCONTRADO") {
        res.status(httpStatus.NOT_FOUND).json({
          error: "numero de telefone não cadastrado",
        });
      } else{ 
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
