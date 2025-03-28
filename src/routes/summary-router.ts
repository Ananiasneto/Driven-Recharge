import { getInfos } from "../controllers/summary-controller";
import { Router } from "express";


const summaryRouter=Router();
summaryRouter.get("/summary/:document",getInfos);


export default summaryRouter;
