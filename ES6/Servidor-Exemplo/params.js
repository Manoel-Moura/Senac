import express from "express";
const server = express();
const cursos = []; // Declaração da variável cursos

server.use(express.json())

server.get('/', (req, res) => {
    return res.send("hello World!")
})


//Nova rota com query params GET
server.get('/curso', (req, res) => {
    const curso = ["javascript", "typescript", "nodeJs", "vueJs"]
    const nome = req.query.nome
    return res.json({ Curso: curso, ValorInserido: `${nome}` })
})

//Nova rota com query params POST
server.post('/curso', (req, res) => {

    const { nome } = req.body
    cursos.push(nome)
    return res.json({ cursos })
})

//Nova rota com query params PUT - Atualizando o valor de um curso

server.put('/curso/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const { nome } = req.body
    cursos[id] = nome
    return res.json({ cursos })
})


console.log("Servidor em execução!")

server.listen(3000);