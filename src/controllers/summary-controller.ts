import { Request, Response } from "express";
import httpStatus from 'http-status';
import { getCarrierById, getCarrierByNumero, getNumerosCpf, getPhoneByNumero, getRechargeByNumeros } from "../services/summary-services";


export async function getInfos(req: Request, res: Response) {
    const { document } = req.params;

    try {
        const clientInfos = await getNumerosCpf(document);
        const phonesResult = await Promise.all(
            clientInfos.phones.map(async (phone) => {
                    const carrier_id = await getCarrierByNumero(phone);
                    const carrier = await getCarrierById(carrier_id);
                    const phoneInfos = await getPhoneByNumero(phone);
                    const recharges = await getRechargeByNumeros(phoneInfos.id);

                    return {
                        phoneInfos,
                        carrier,
                        recharges
                    };
            })
        );
        const result = {
            document: document,
            phones: phonesResult
        };

        res.status(httpStatus.OK).json(result);
    } catch (error) {
        if (error.message === "NAO_ENCONTRADO") {
            res.status(httpStatus.NOT_FOUND).json({
              error: "Este cpf não tem números de telefone cadastrado",
            });
          } else{ 
            res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}