import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const porta = process.env.PORT || 5000

app.listen(porta , () => console.log(`
    🚀 Servidor iniciado na porta ${porta}
`))