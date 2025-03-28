import express, { json, Request, Response } from "express";
import phoneRouter from './routes/phone-router';
import rechargeRouter from "./routes/recharge-router";
import summaryRouter from "./routes/summary-router";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
});

app.use(phoneRouter);
app.use(rechargeRouter);
app.use(summaryRouter);
app.listen(5000, () => console.log("rodando liso"));