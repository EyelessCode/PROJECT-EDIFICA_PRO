import express, { Response } from 'express';
import 'dotenv/config';

const app=express();
const PORT=process.env.PORT||4500;

app.get("/test",(res:Response)=>{
    res.send("Hello World");
})

app.listen(PORT,()=>console.log(`LISTENING IN ${PORT} PORT!`))