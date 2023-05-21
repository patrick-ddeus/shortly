import express from "express";
import "dotenv/config";
import IndexRouter from "./routes/index.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(IndexRouter);

const porta = process.env.PORT || 5000;

app.listen(porta, () => console.log(`
    🚀 Servidor iniciado na porta ${porta}
`));