import express, { json, Request, Response } from "express";
import phoneRouter from "../src/routes/phone-router";
import rechargeRouter from "../src/routes/recharge-router";
import summaryRouter from "../src/routes/summary-router";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
});

app.use(phoneRouter);
app.use(rechargeRouter);
app.use(summaryRouter);
app.listen(5000, () => console.log("rodando liso"));