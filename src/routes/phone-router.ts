import { validateSchema } from "../middlewares/middleware-schema";
import { cadastrarPhone, getTelefoneByDocument } from "../controllers/phone-controller";
import { Router } from "express";
import phoneSchema from "../schemas/phone-schema";

const phoneRouter=Router();
phoneRouter.post("/phones",validateSchema(phoneSchema), (req, res, next) => {
    cadastrarPhone(req, res).catch(next);
});
phoneRouter.get("/phones/:document",getTelefoneByDocument);

export default phoneRouter;