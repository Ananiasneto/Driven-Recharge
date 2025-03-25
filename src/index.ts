import express, { json, Request, Response } from "express";

const app=express();
app.use(json());

app.get("/health",(req:Request,res:Response)=>{
        res.sendStatus(200);
})


app.listen(5000,()=>{
    console.log("server rodando liso!!")

});