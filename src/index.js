import express from 'express';
import "express-async-errors";
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/authRouter.js';
import recipeRouter from './routes/recipeRouter.js';
import errorHandling from './middlewares/errorHandling.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(recipeRouter);
app.use(errorHandling);

app.listen(5000, () => {
    console.log("Up and running")
})
