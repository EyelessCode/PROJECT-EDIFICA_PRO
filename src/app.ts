import express, { Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const PORT = process.env.PORT || 4500;
const prisma=new PrismaClient({
    log:["info","warn","error"]
})

app.use(express.json())
app.use(cors())

//? This is just a test
app.get('/test', (req: Request, res: Response) => {
    res.send('Hello World');
})

app.listen(PORT, () => console.log(`LISTENING IN ${PORT} PORT!`))

export {prisma}
