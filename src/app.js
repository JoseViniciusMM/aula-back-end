// import express (req)
import express from "express";

const app = express();

app.use(express.json());

const grupos = [
    {id: 1, nome: "Adminstrador"},
    {id: 2, nome: "Gerentes"},
    {id: 3, nome: "Usuarios Limitados"},
]

const unidades = [
    {id: 1, nome: "Vilhena"},
    {id: 2, nome: "Cacoal"},
    {id: 3, nome: "guajará"},
]


const usuarios = [
    {id: 1, nome: "Vicente da Silva"},
    {id: 2, nome: "Noe da Silva"},
    {id: 3, nome: "Thomé Silva"},
]

app.get('/', (rep, res, next) => {
    res.status(200).send('Bem-vindo ao Auth')
})

app.get('/grupos ', (rep, res, next) => {
    res.status(200).json(grupos);
})

app.get('/grupos/:id ', (rep, res, next) => {
let index = buscaGrupo(req.params.id);    
res.json(grupos[index]);
}) //acessa posição do arrey no index