import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/authRouter.js';

dotenv.config();

const app = express();

app.use(cors);
app.use(express.json());

app.use(authRouter);

app.listen(5000, () => {
    console.log("Up and running")
})
