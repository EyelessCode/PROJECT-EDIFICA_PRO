import express, { Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.json())
app.use(cors())

app.get('/test', (req: Request, res: Response) => {
    res.send('Hello World');
})

app.listen(PORT, () => console.log(`LISTENING IN ${PORT} PORT!`))
