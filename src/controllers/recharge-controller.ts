import { Request, Response } from "express";
import httpStatus from 'http-status';
import { getPhonesId} from "../repositories/phone-repository";
import { getRechargeById } from "../repositories/recharge-repository";


export async function getRechargeByNumero(req: Request, res: Response) {
        try {
            const recharges = await getRechargeById(
                await getPhonesId(req.params.numero)
            );
            res.status(200).json(recharges);
        } catch (err) {
            console.error(err);
            res.status(500)
               .send(err.message);
        }
    }
export async function postRecharge(req: Request, res: Response){
            res.status(200).send(httpStatus.CREATED);
    }