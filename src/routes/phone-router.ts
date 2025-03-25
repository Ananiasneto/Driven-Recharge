import { validateSchema } from "../middlewares/middleware-schema";
import { cadastrarPhone } from "../controllers/phone-controller";
import { Router } from "express";
import phoneSchema from "../schemas/phone-schema";

const phoneRouter=Router();
phoneRouter.post("/phones",validateSchema(phoneSchema),cadastrarPhone)

export default phoneRouter;