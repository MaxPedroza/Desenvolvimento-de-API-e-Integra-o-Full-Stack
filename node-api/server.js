
/*
O que o server.js completo deve ter:

1. const express = require('express');
2. const app = express();
3. const PORT = 3000;
4. app.use(express.json());
5. let tarefas = [];            
6. let proximoId = 1;            
7. Rota POST /tarefas            
8. Rota GET /tarefas              
9. Rota GET /tarefas/:id          
10. Rota PUT /tarefas/:id        
11. Rota DELETE /tarefas/:id     
12. app.listen(PORT, ...)         
*/

// 1 -  importa o express
const express = require ('express');

// 2 - Instancia do express
const app = express();

// 3 - Define a porta do servidor
const PORT = 3000;

// 4 - Middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// 5  e 6-  Banco de dados temporario em memoria 
let tarefas = [];
let proximoId = 1;

//============  ROTAS CRUD ============

// 7 - CREATE - Criar uma nova tarefa (POST)
app.post('/tarefas', (req, res) =>{
    const {titulo, descricao} = req.body;

    if (!titulo){
        return res.status(400).json({erro: 'O campo titulo é obrigatório'})
    }

    const novaTarefa = {
        id: proximoId++,
        titulo,
        descricao: descricao || '',
        concluida: false
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

// 8 - READ ALL - Listar todas as tarefas (GET)
app.get('/tarefas', (req,res) => {
    res.json(tarefas);
})

// 9 - READ ONE - Buscar uma tarefa pelo ID (GET)
app.get('/tarefas/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({erro: 'Tarefa não encontrada'});
    }

    res.json(tarefa);
});

//10 - UPDATE - Atualizar uma tarefa (PUT)
app.put('/tarefas/:id',(req, res) => {
    const id = parseInt(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa){
        return res.status(404).json({erro: 'Tarefa não encontrada'});
    }

    const {titulo, descricao, concluida} = req.body;

    if (titulo !== undefined) tarefa.titulo = titulo;
    if (descricao !== undefined) tarefa.descricao = descricao;
    if (concluida !== undefined) tarefa.concluida = concluida;

    res.json(tarefa);

});

// 11 - DELETE - Deletar uma tarefa (DELETE)
app.delete('/tarefas/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const index = tarefas.findIndex(t => t.id === id);

    if (index === -1){
        return res.status(404).json({erro: 'Tarefa não encontrada'});
    }

    tarefas.splice(index, 1);
    res.json({mensagem: 'Tarefa deletada com sucesso'});    
});


// 12 -  Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});