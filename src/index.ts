import express, { json, Request, Response } from "express";
import phoneRouter from "../src/routes/phone-router";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
});

app.use(phoneRouter);

app.listen(5000, () => console.log("rodando liso"));