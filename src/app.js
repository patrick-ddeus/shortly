import express from "express";
import "dotenv/config";
import AuthRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/signup', AuthRouter)

const porta = process.env.PORT || 5000

app.listen(porta , () => console.log(`
    🚀 Servidor iniciado na porta ${porta}
`))