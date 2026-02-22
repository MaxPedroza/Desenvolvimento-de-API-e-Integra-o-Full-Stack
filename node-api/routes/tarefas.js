/*
O que o routes/tarefas.js completo deve ter:

1. const express = require('express');
2. const router = express.Router();
3. let tarefas = [];
4. let proximoId = 1;
5. Rota POST /        (criar tarefa)
6. Rota GET /         (listar todas)
7. Rota GET /:id      (buscar uma)
8. Rota PUT /:id      (atualizar)
9. Rota DELETE /:id   (deletar)
10. module.exports = router;
*/


// Importa apenas o Router do Express (não precisamos do express() inteiro )
const express = require ('express');
const router = express.Router();

//"Banco de dados" termporario em memoria
let tarefas = [];
let proximoId = 1;

// =============ROTAS CRUD =============

//CREATE - Criar uma nova tarefa (POST /)
// Nota: a rota é "/" porque o prefixo "/tarefas" ja foi definido no server.js
router.post('/', (req, res) => {
    const {titulo , descricao } = req.body;

    if (!titulo) {                                                                                                  
        return res.status(400).json({ erro:  'O campo titulo é obrigatório' });    
    }

    const novaTarefa = {
        id: proximoId++,
        titulo,
        descricao: descricao || '',
        concluida: false
    };
    tarefas.push (novaTarefa);
    res.status(201).json(novaTarefa);

});

// READ ALL - GET /
router.get('/', (req, res) =>{
    res.json(tarefas);
});

//READ ONE - GET /:id
router.get('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({ erro: 'Tarefa não encontrada'});
    }

    res.json(tarefa);
});

// UPDATE - PUT /:id
router.put('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({erro: 'Tarefa não encontrada'});
    }

    const {titulo, descricao, concluida} = req.body;

    if (titulo !== undefined) tarefa.titulo = titulo;
    if (descricao !== undefined) tarefa.descricao = descricao;
    if (concluida !== undefined) tarefa.concluida = concluida

    res.json(tarefa);
});

// DELETE - DELETE /:id
router.delete('/:id', (req, res) =>{
    const id  =parseInt(req.params.id);
    const index = tarefas.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({erro: 'Tarefa não encontrada'});
    }
    tarefas.splice(index, 1);
    res.json({mensagem: 'Tarefa deletada com sucesso'});

});

module.exports = router;

