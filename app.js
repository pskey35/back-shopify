import express from "express"

import cookieParser from 'cookie-parser';

import mainRouter from './routes/mainRouter.js';
import customerRouter from "./routes/customerRouter.js";
import apiRouter from "./router/apiRouter.js"
const app = express()

app.use(express.json());

app.use(cookieParser());
app.use(mainRouter,customerRouter)
app.use("/api",apiRouter)


app.listen(8000,()=>console.log("Server running in http://localhost:8000"))