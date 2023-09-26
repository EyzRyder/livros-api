const express = require("express");
const livros = require("./livros");
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`<h1> <a href="http://localhost:${port}/introducao"> Oi Pessoal. Seja Bem-vindo! </a> </h1>`);
});

app.get("/introducao", (req, res) => {
    res.send(`<h2> <a href="http://localhost:${port}/transfere"> Introdução ao Express </a> </h2>`);
});

app.post("/filmes", (req, res) => {
    const {titulo, genero} = req.body;
    res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`);
});

const log = (req, res, next) => {
    console.log(`Acessado em ${new Date()}`);
    next();
};
app.get('/transfere', log, (req, res) => {
    res.send("Valor transferido com sucesso!");
});

app.use('/livros', livros);

app.listen(port, () => {
    console.log(`🌟Servidor🌠 rodando em: http://localhost:${port}`);
});