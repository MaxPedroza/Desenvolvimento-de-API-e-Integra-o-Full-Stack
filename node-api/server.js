/*
O que o server.js (refatorado) deve ter:

1. const express = require('express');
2. const app = express();
3. const PORT = 3000;
4. app.use(express.json());
5. const tarefasRoutes = require('./routes/tarefas');
6. app.use('/tarefas', tarefasRoutes);
7. app.listen(PORT, ...)
*/

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const tarefasRoutes = require('./routes/tarefas');
app.use('/tarefas', tarefasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});