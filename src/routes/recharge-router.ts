import { Router } from "express";
import { validateSchema } from "../middlewares/middleware-schema";
import { rechargeSchema } from "../schemas/recharge-schema";
import { getRechargeByNumero, postRecharge } from "../controllers/recharge-controller";

const rechargeRouter=Router();
rechargeRouter.get("/recharge/:number",getRechargeByNumero);
rechargeRouter.post("/recharge",validateSchema(rechargeSchema),postRecharge);

export default rechargeRouter;