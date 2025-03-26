import { validateSchema } from "../middlewares/middleware-schema";
import { cadastrarPhone, getTelefoneByDocument } from "../controllers/phone-controller";
import { Router } from "express";
import phoneSchema from "../schemas/phone-schema";

const phoneRouter=Router();
phoneRouter.post("/phones",validateSchema(phoneSchema),cadastrarPhone)
phoneRouter.get("/phones/:document",getTelefoneByDocument);

export default phoneRouter;