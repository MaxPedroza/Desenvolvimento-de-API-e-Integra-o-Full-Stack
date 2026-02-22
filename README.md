# Estudo Full Stack — Angular + Node.js

> Um guia prático e completo para quem quer aprender a desenvolver aplicações web do zero.  
> Aqui você não só copia código — você **entende cada linha, cada conceito e cada decisão**.

---

## Sobre este projeto

### O que vamos construir?

Vamos construir uma **aplicação web completa** (fullstack) de **gerenciamento de tarefas** — um **Todo List**, como o Google Tasks, Todoist ou Microsoft To Do.

Mas o objetivo **não é só fazer um app de tarefas**. O objetivo é usar esse projeto como veículo para aprender, na prática, como funciona o desenvolvimento web moderno — do servidor que processa os dados até a tela que o usuário vê.

### Por que um Todo List?

Porque é o projeto perfeito para aprender. Parece simples, mas envolve **todas as operações fundamentais** que qualquer sistema real precisa:

- **Criar** dados (cadastrar uma tarefa)
- **Ler** dados (listar tarefas, buscar uma específica)
- **Atualizar** dados (editar título, marcar como concluída)
- **Remover** dados (deletar uma tarefa)

Essas 4 operações são chamadas de **CRUD** (Create, Read, Update, Delete) — e são a base de praticamente todo software que existe: redes sociais, e-commerces, bancos, hospitais... todos usam CRUD.

Se você entender como construir um Todo List do zero, você tem a base para construir **qualquer coisa**.

### O que vamos aprender?

Este estudo é dividido em duas grandes partes:

| Parte | Tecnologia | O que faz |
|---|---|---|
| **Backend (API)** | Node.js + Express | O "cérebro" da aplicação — recebe pedidos, processa dados e responde |
| **Frontend (interface)** | Angular | A "cara" da aplicação — a tela que o usuário vê e interage |

No final, as duas partes se comunicam: o Angular (frontend) faz requisições para a API em Node.js (backend), que processa e devolve os dados.

```
┌─────────────────────────────────────────────────────────────┐
│                   NOSSA APLICAÇÃO                           │
│                                                             │
│   🖥️ FRONTEND (Angular)        🔧 BACKEND (Node.js)        │
│   O que o usuário vê           O que processa os dados      │
│                                                             │
│   - Tela de tarefas            - API REST                   │
│   - Botões e formulários       - Rotas CRUD                 │
│   - Design e interação         - Validação de dados         │
│                                                             │
│           │                           │                     │
│           └───── HTTP (JSON) ─────────┘                     │
│                 se comunicam                                │
└─────────────────────────────────────────────────────────────┘
```

### Para quem é este guia?

Para **qualquer pessoa** que queira aprender desenvolvimento web, mesmo que nunca tenha programado antes. Cada passo é explicado em detalhes:

- **O que fazer** — comandos e código para digitar
- **Por que fazer** — a razão por trás de cada decisão
- **Como funciona** — explicação do que cada linha de código faz

A ideia é que você consiga **ler, entender e reproduzir** tudo por conta própria.

### Tecnologias utilizadas

| Tecnologia | Versão | Para quê |
|---|---|---|
| **Node.js** | v22+ | Rodar JavaScript no servidor |
| **npm** | v11+ | Gerenciar pacotes e dependências |
| **Express** | v4+ | Framework para criar a API REST |
| **Angular** | *(em breve)* | Framework para criar o frontend |
| **VS Code** | — | Editor de código |

### Estrutura do projeto

```
fullstack-angular-node/
├── ESTUDO-PASSO-A-PASSO.md     ← 📖 Este guia (você está aqui!)
├── node-api/                    ← 🔧 Backend (API em Node.js + Express)
│     ├── package.json
│     ├── server.js
│     └── node_modules/
└── (frontend angular/)          ← 🖥️ Frontend (em breve)
```

---

## Roteiro do Estudo

Este estudo está dividido em **fases progressivas**. Cada fase abaixo é documentada com explicações detalhadas, comandos utilizados e o porquê de cada ação. A ideia é que você siga na ordem, fase por fase, construindo conhecimento de forma incremental.

### O que vamos ver a partir daqui?

1. **Preparar o ambiente** — verificar se as ferramentas necessárias estão instaladas (Node.js, npm, VS Code) ✅
2. **Organizar o projeto** — criar a estrutura de pastas que vai abrigar o backend e o frontend ✅
3. **Criar o servidor** — inicializar o projeto Node.js, instalar o Express e entender a anatomia de um server.js ✅
4. **Entender APIs** — o que são, como funcionam, o que é REST, HTTP, JSON e códigos de status ✅
5. **Construir o CRUD** — criar todas as rotas da API de tarefas (criar, listar, buscar, atualizar, deletar) ✅
6. **Testar a API** — validar cada endpoint com requisições reais ✅
7. **Construir o Frontend** — criar a interface com Angular *(em breve)*
8. **Integrar tudo** — conectar o Angular com a API Node.js *(em breve)*

---

### Índice

#### Introdução
- [Sobre este projeto](#sobre-este-projeto)
  - [O que vamos construir?](#o-que-vamos-construir)
  - [Por que um Todo List?](#por-que-um-todo-list)
  - [O que vamos aprender?](#o-que-vamos-aprender)
  - [Para quem é este guia?](#para-quem-é-este-guia)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Estrutura do projeto](#estrutura-do-projeto)

#### Fase 1 — Fundamentos e Pré-requisitos
- [O que é preciso ter instalado?](#o-que-é-preciso-ter-instalado)
- [Verificando a instalação](#verificando-a-instalação)

#### Fase 2 — Organizando a Estrutura de Pastas
- [Por que organizar?](#por-que-organizar)
- [Passo 1 — Criar a pasta raiz do estudo](#passo-1--criar-a-pasta-raiz-do-estudo)
- [Passo 2 — Criar a pasta do backend (API)](#passo-2--criar-a-pasta-do-backend-api)

#### Fase 3 — Criando o Projeto Node.js (Backend)
- [Passo 3 — Inicializar o projeto com npm](#passo-3--inicializar-o-projeto-com-npm)
- [Passo 4 — Instalar o Express](#passo-4--instalar-o-express)
- [Passo 5 — Criar o arquivo principal do servidor](#passo-5--criar-o-arquivo-principal-do-servidor)
- [Entendendo o server.js — A Linguagem e a Estrutura](#entendendo-o-serverjs--a-linguagem-e-a-estrutura)
- [Passo 6 — Escrever o código do servidor](#passo-6--escrever-o-código-do-servidor)
- [Passo 7 — Rodar o servidor](#passo-7--rodar-o-servidor)

#### Fase 4 — Entendendo APIs
- [O que é uma API?](#o-que-é-uma-api)
- [Para que serve uma API?](#para-que-serve-uma-api)
- [Como funciona a comunicação?](#como-funciona-a-comunicação)
- [Os métodos HTTP (verbos)](#os-métodos-http-verbos)
- [Os códigos de status HTTP](#os-códigos-de-status-http)
- [O que é uma API REST?](#o-que-é-uma-api-rest)
- [O que é JSON?](#o-que-é-json)
- [Como estamos criando a API?](#como-estamos-criando-a-api)

#### Fase 5 — Construindo o CRUD da API de Tarefas
- [O que estamos construindo? (CRUD)](#o-que-estamos-construindo)
- [O que é CRUD?](#o-que-é-crud)
- [Anatomia de uma Rota Express](#anatomia-de-uma-rota-express)
- [Parâmetros de Rota (:id)](#parâmetros-de-rota-id)
- [Desestruturação em JavaScript](#desestruturação-em-javascript)
- [Validação Básica](#validação-básica)
- [Métodos de Array usados no CRUD](#métodos-de-array-usados-no-crud)
- [Passo 8 — O código completo do server.js com CRUD](#passo-8--o-código-completo-do-serverjs-com-crud)

#### Fase 6 — Testando a API
- [Como testar?](#como-testar)
- [Passo 9 — Rodar o servidor](#passo-9--rodar-o-servidor)
- [Passo 10 — Testando o CREATE (POST)](#passo-10--testando-o-create-post-tarefas)
- [Passo 11 — Testando o READ ALL (GET)](#passo-11--testando-o-read-all-get-tarefas)
- [Passo 12 — Testando o READ ONE (GET :id)](#passo-12--testando-o-read-one-get-tarefasid)
- [Passo 13 — Testando o UPDATE (PUT)](#passo-13--testando-o-update-put-tarefasid)
- [Passo 14 — Testando o DELETE](#passo-14--testando-o-delete-delete-tarefasid)
- [Passo 15 — Testando cenários de ERRO](#passo-15--testando-cenários-de-erro)
- [Resumo dos Testes](#resumo-dos-testes)
- [Conceitos Aprendidos na Fase 6](#conceitos-aprendidos-na-fase-6)

#### Referência Rápida
- [Conceitos Importantes Até Aqui](#conceitos-importantes-até-aqui)
- [Conceitos Aprendidos na Fase 5](#conceitos-aprendidos-na-fase-5)
- [Conceitos Aprendidos na Fase 6](#conceitos-aprendidos-na-fase-6)
- [Próximos Passos](#próximos-passos)

---

## Fase 1 — Fundamentos e Pré-requisitos

### O que é preciso ter instalado?

- **Node.js** (v18+): é o runtime que permite rodar JavaScript fora do navegador (no servidor).
- **npm** (vem junto com o Node): é o gerenciador de pacotes — usamos pra instalar bibliotecas/dependências.
- **VS Code**: nosso editor de código.

### Verificando a instalação

Para confirmar que o Node.js e o npm estão instalados, rodamos no terminal:

```bash
node --version
npm --version
```

No nosso caso, temos:
- Node.js: **v22.14.0**
- npm: **11.1.0**

> Se esses comandos retornarem versões, está tudo certo. Se der erro, é preciso instalar o Node.js pelo site oficial: https://nodejs.org

---

## Fase 2 — Organizando a Estrutura de Pastas

### Por que organizar?

Dentro da pasta `Estudos`, vamos criar uma pasta específica para esse estudo. Isso mantém tudo organizado e separado de outros projetos futuros.

### Passo 1 — Criar a pasta raiz do estudo

No terminal, dentro de `C:\dev\Estudos`:

```bash
mkdir fullstack-angular-node
```

Depois entramos nela:

```bash
cd fullstack-angular-node
```

### Passo 2 — Criar a pasta do backend (API)

Dentro de `fullstack-angular-node`, criamos a pasta que vai conter nosso projeto Node.js:

```bash
mkdir node-api
```

E entramos nela:

```bash
cd node-api
```

### Estrutura atual

```
Estudos/
  └── fullstack-angular-node/       ← pasta raiz do estudo
        ├── ESTUDO-PASSO-A-PASSO.md  ← este arquivo
        └── node-api/                ← projeto backend (Node.js + Express)
```

> Mais pra frente, quando formos estudar Angular, vamos criar outra pasta aqui dentro para o frontend.

---

## Fase 3 — Criando o Projeto Node.js (Backend)

### Passo 3 — Inicializar o projeto com npm

Dentro da pasta `node-api`, rodamos:

```bash
npm init -y
```

**O que esse comando faz?**
- Cria o arquivo `package.json` na pasta atual.
- O `package.json` é o **"cartão de identidade"** do projeto Node.js. Ele guarda:
  - Nome do projeto
  - Versão
  - Scripts (comandos que podemos rodar)
  - Lista de dependências (bibliotecas instaladas)
- O `-y` aceita todos os valores padrão automaticamente. Sem ele, o npm perguntaria nome, versão, descrição, etc.

> **Regra importante:** Todo projeto Node.js começa com `npm init`. Sem o `package.json`, não conseguimos instalar dependências nem organizar o projeto.

### Passo 4 — Instalar o Express

Express é o framework mais popular do Node.js para criar servidores web e APIs REST.

```bash
npm install express
```

**O que esse comando faz?**
- Baixa a biblioteca Express da internet (do registro npm).
- Cria a pasta `node_modules/` — onde ficam todas as bibliotecas instaladas.
- Cria o arquivo `package-lock.json` — trava as versões exatas das dependências.
- Adiciona `"express"` na seção `"dependencies"` do `package.json`.

> **Dica:** Nunca mexa manualmente na pasta `node_modules`. Ela é gerenciada pelo npm. Se precisar reinstalar, basta rodar `npm install`.

### Passo 5 — Criar o arquivo principal do servidor

Vamos criar o arquivo `server.js` — ele é o ponto de entrada da nossa aplicação.

No terminal, dentro de `node-api/`:

```bash
New-Item server.js (touch server.js no Linux/Mac)
```

---

### Entendendo o `server.js` — A Linguagem e a Estrutura

#### Que linguagem estamos usando?

Estamos usando **JavaScript**! Mais especificamente, JavaScript rodando no **Node.js** (fora do navegador).

JavaScript é a linguagem que roda nos navegadores (Chrome, Firefox, etc.). O **Node.js** pegou essa linguagem e permitiu que ela rodasse no **servidor** também. Ou seja, com JS você consegue fazer o frontend E o backend.

#### A estrutura de um server.js

Um arquivo `server.js` tem basicamente **4 blocos**:

##### Bloco 1 — Importações (trazer as ferramentas)

```javascript
const express = require('express');
```

- `require('express')` — é como dizer "quero usar a biblioteca Express que instalei"
- `const express` — guardamos essa biblioteca na variável `express`
- Pense como: **"pegar a caixa de ferramentas"**

##### Bloco 2 — Configuração (preparar a aplicação)

```javascript
const app = express();
const PORT = 3000;
app.use(express.json());
```

- `express()` — cria a aplicação (o servidor em si). É como **"montar o restaurante"**
- `PORT = 3000` — define a porta. Pense na porta como o **endereço/número do restaurante**
- `app.use(express.json())` — configura o servidor para entender dados em formato JSON. É como dizer **"aqui aceitamos pedidos por escrito"**

##### Bloco 3 — Rotas (os "cardápios" / endpoints)

```javascript
app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando!' });
});
```

Destrinchando cada parte:

| Parte | O que significa |
|---|---|
| `app.get` | Cria uma rota do tipo **GET** (pedir/buscar dados) |
| `'/'` | O **caminho** da URL (neste caso, a raiz: `http://localhost:3000/`) |
| `(req, res)` | São dois objetos que o Express te dá automaticamente |
| `req` | **Request** (requisição) — contém os dados que o cliente enviou |
| `res` | **Response** (resposta) — é o que você usa para responder ao cliente |
| `res.json({...})` | Envia uma resposta em formato JSON |
| `=>` | É uma **arrow function** (forma moderna de escrever funções no JS) |

**Analogia:** É como o garçom (`req`) trazendo o pedido do cliente, e o cozinheiro (`res`) mandando o prato de volta.

##### Bloco 4 — Iniciar o servidor (abrir as portas)

```javascript
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

- `app.listen(3000)` — liga o servidor e fica esperando conexões na porta 3000
- O `console.log` mostra uma mensagem no terminal confirmando que está funcionando
- É como **"abrir o restaurante para os clientes"**

##### Resumo Visual da Estrutura

```
┌─────────────────────────────────────────┐
│  1. IMPORTAR      → require('express')  │
│  2. CONFIGURAR    → express(), porta    │
│  3. CRIAR ROTAS   → app.get, app.post   │
│  4. LIGAR         → app.listen()        │
└─────────────────────────────────────────┘
```

> **Todo servidor Express segue essa mesma estrutura.** Quando você entender esses 4 blocos, consegue ler qualquer servidor Node.js/Express.

---

### Passo 6 — Escrever o código do servidor

Agora que entendemos a estrutura, abra o `server.js` e digite o seguinte código:

```javascript
// Importamos o Express
const express = require('express');

// Criamos uma instância do Express (nossa aplicação)
const app = express();

// Definimos a porta onde o servidor vai rodar
const PORT = 3000;

// Middleware para o Express entender JSON no corpo das requisições
app.use(express.json());

// Rota de teste — GET na raiz "/"
app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando! Bem-vindo ao estudo Node.js + Express!' });
});

// Iniciamos o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

> Cada linha está explicada em detalhes na seção anterior ("Entendendo o server.js").

### Passo 7 — Rodar o servidor

Para iniciar o servidor:

```bash
node server.js
```

Se tudo estiver certo, vai aparecer no terminal:

```
Servidor rodando em http://localhost:3000
```

**Para testar:** Abra o navegador e acesse `http://localhost:3000`. Você deve ver:

```json
{ "mensagem": "API funcionando! Bem-vindo ao estudo Node.js + Express!" }
```

> **Para parar o servidor:** pressione `Ctrl + C` no terminal.

---

## Fase 4 — Entendendo APIs

Antes de avançar para o código CRUD, vamos entender **o que exatamente estamos construindo**.

### O que é uma API?

**API** significa **Application Programming Interface** (Interface de Programação de Aplicações).

Pense na analogia do restaurante:
- Você (cliente) não entra na cozinha para fazer sua comida
- Você fala com o **garçom**, que leva seu pedido para a cozinha e traz a resposta (seu prato)

A API é esse **garçom**. É uma camada intermediária que permite que dois sistemas se comuniquem sem precisar conhecer os detalhes internos um do outro.

#### Exemplo do mundo real

Quando você abre o app do clima no celular:

```
1. O app NÃO TEM os dados do clima dentro dele
2. Ele FAZ UMA REQUISIÇÃO para uma API de clima (ex: OpenWeather)
3. A API PROCESSA o pedido e RESPONDE com os dados (temperatura, umidade, etc.)
4. O app EXIBE os dados na tela
```

Nessa analogia:
- O **app** é o **cliente** (frontend)
- A **API** é o **garçom** (intermediário)
- O **servidor/banco de dados** é a **cozinha** (backend)

### Para que serve uma API?

| Benefício | Explicação |
|---|---|
| **Separar responsabilidades** | O frontend (tela) não precisa saber como o banco de dados funciona. Ele só pede os dados para a API. |
| **Reutilização** | Uma mesma API pode servir um site, um app mobile, um app desktop, um chatbot... Todos consomem os mesmos dados. |
| **Segurança** | O cliente nunca acessa o banco de dados diretamente. A API controla o que pode ser acessado e por quem. |
| **Escalabilidade** | Você pode atualizar o frontend sem mexer no backend, e vice-versa. |

### Como funciona a comunicação?

A comunicação acontece pelo protocolo **HTTP** (o mesmo que o navegador usa). Funciona no modelo **requisição → resposta**:

```
Cliente (ex: navegador)          Servidor (API)
       |                              |
       |--- Requisição HTTP --------->|
       |    (método + URL + dados)    |
       |                              |
       |<-- Resposta HTTP ------------|
       |    (status + dados JSON)     |
```

### Os métodos HTTP (verbos)

São os "tipos de pedido" que o cliente pode fazer:

| Método | Ação | Exemplo |
|--------|------|---------|
| **GET** | Buscar/ler dados | Listar todos os usuários |
| **POST** | Criar dados novos | Cadastrar um usuário |
| **PUT** | Atualizar dados existentes | Editar o nome de um usuário |
| **DELETE** | Remover dados | Excluir um usuário |

Esses 4 métodos formam o **CRUD** (Create, Read, Update, Delete) — as 4 operações básicas de qualquer sistema.

### Os códigos de status HTTP

Quando a API responde, ela envia um **código numérico** indicando o resultado:

| Código | Significado | Quando usar |
|--------|-------------|-------------|
| **200** | OK | Tudo deu certo |
| **201** | Created | Recurso criado com sucesso |
| **400** | Bad Request | O cliente enviou dados inválidos |
| **404** | Not Found | O recurso não foi encontrado |
| **500** | Internal Server Error | Erro no servidor |

> **Dica:** Se você já viu "Erro 404" ao acessar uma página que não existe, agora sabe de onde vem!

### O que é uma API REST?

O que estamos construindo é uma **API REST** (Representational State Transfer). REST é um **estilo de arquitetura** que segue estas regras:

1. **URLs representam recursos** → `/tarefas`, `/usuarios`, `/produtos`
2. **Métodos HTTP definem a ação** → GET para ler, POST para criar, etc.
3. **Comunicação sem estado (stateless)** → Cada requisição é independente; o servidor não "lembra" de requisições anteriores
4. **Respostas em formato padrão** → Geralmente **JSON**

### O que é JSON?

JSON (JavaScript Object Notation) é o formato de dados que a API usa para trocar informações:

```json
{
    "id": 1,
    "titulo": "Estudar Node.js",
    "descricao": "Aprender a criar APIs",
    "concluida": false
}
```

É basicamente um objeto JavaScript — por isso o Node.js trabalha tão bem com APIs.

### Como estamos criando a API?

Usando **Node.js + Express**:

- **Node.js** → Permite rodar JavaScript fora do navegador (no servidor)
- **Express** → Framework que facilita a criação de rotas HTTP

O fluxo que seguimos:

```
1. Instalamos o Express          → npm install express
2. Criamos o server.js           → ponto de entrada do servidor
3. Configuramos middleware       → express.json() para entender JSON
4. Definimos rotas               → GET, POST, PUT, DELETE
5. Iniciamos o servidor          → app.listen(3000)
```

Cada **rota** que criamos é um **endpoint** da API — um endereço que o cliente pode acessar para fazer alguma operação.

#### Resumo visual

```
┌──────────────────────────────────────────────────────────────────┐
│                        COMO FUNCIONA                             │
│                                                                  │
│   CLIENTE              API (Express)           BANCO DE DADOS    │
│  (navegador,          (server.js)              (por enquanto,    │
│   app, etc.)                                    array na memória)│
│      │                     │                         │           │
│      │──── GET /tarefas ──>│                         │           │
│      │                     │── busca dados ─────────>│           │
│      │                     │<── retorna dados ───────│           │
│      │<─── JSON [{...}] ──│                         │           │
│      │                     │                         │           │
└──────────────────────────────────────────────────────────────────┘
```

> **Agora que entendemos o que é uma API, para que serve e como funciona a comunicação, estamos prontos para criar as rotas CRUD!**

---

## Conceitos Importantes Até Aqui

| Conceito | O que é |
|---|---|
| **Node.js** | Runtime que roda JavaScript no servidor (fora do navegador) |
| **npm** | Gerenciador de pacotes — instala bibliotecas |
| **package.json** | Arquivo que descreve o projeto e suas dependências |
| **Express** | Framework para criar servidores web e APIs |
| **Rota** | Um "endereço" na API que responde a requisições (GET, POST, etc.) |
| **Middleware** | Função que processa a requisição antes de chegar na rota |
| **JSON** | Formato de dados usado para comunicação entre frontend e backend |
| **localhost:3000** | Endereço local do seu servidor durante o desenvolvimento |

---

## Fase 5 — Construindo o CRUD da API de Tarefas

### O que estamos construindo?

Estamos construindo uma **API REST de gerenciamento de tarefas** — um **Todo List** (lista de afazeres).

É o projeto clássico para aprender desenvolvimento web porque envolve **todas as operações fundamentais** de qualquer sistema:
- Criar tarefas
- Listar tarefas
- Editar tarefas
- Remover tarefas

Pense em apps como Google Tasks, Todoist ou Microsoft To Do — todos eles funcionam com uma API por trás que faz exatamente isso.

#### O que nossa API vai fazer?

| Funcionalidade | Método HTTP | Endpoint | Descrição |
|---|---|---|---|
| Criar tarefa | `POST` | `/tarefas` | Recebe título e descrição, cria uma tarefa nova |
| Listar todas | `GET` | `/tarefas` | Retorna todas as tarefas cadastradas |
| Buscar uma | `GET` | `/tarefas/:id` | Retorna uma tarefa específica pelo seu ID |
| Atualizar | `PUT` | `/tarefas/:id` | Atualiza os dados de uma tarefa existente |
| Deletar | `DELETE` | `/tarefas/:id` | Remove uma tarefa |

#### Estrutura de uma tarefa

Cada tarefa é um **objeto** com estas propriedades:

```json
{
    "id": 1,
    "titulo": "Estudar Node.js",
    "descricao": "Aprender a criar APIs REST",
    "concluida": false
}
```

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | número | Identificador único, gerado automaticamente |
| `titulo` | texto | Nome da tarefa (obrigatório) |
| `descricao` | texto | Detalhes da tarefa (opcional) |
| `concluida` | booleano | `false` = pendente, `true` = feita |

> **Por enquanto**, vamos armazenar as tarefas num array em memória (sem banco de dados). Quando o servidor parar, os dados são perdidos. Mais pra frente, vamos conectar com um banco de dados real.

---

### O que é CRUD?

CRUD é um acrônimo que representa as **4 operações básicas** que qualquer sistema faz com dados:

| Letra | Operação | Método HTTP | O que faz |
|---|---|---|---|
| **C** | **Create** (Criar) | `POST` | Insere um novo registro |
| **R** | **Read** (Ler) | `GET` | Busca/consulta registros |
| **U** | **Update** (Atualizar) | `PUT` | Modifica um registro existente |
| **D** | **Delete** (Deletar) | `DELETE` | Remove um registro |

Praticamente **todo sistema do mundo** é baseado em CRUD:
- Rede social: criar post, ler feed, editar post, deletar post
- E-commerce: criar produto, listar produtos, atualizar preço, remover produto
- Banco: criar conta, consultar saldo, atualizar dados, encerrar conta

> **Se você dominar CRUD, você domina a base de qualquer aplicação.**

---

### Anatomia de uma Rota Express

Toda rota no Express segue a **mesma estrutura**. Vamos dissecar cada parte:

```javascript
app.metodo('/caminho', (req, res) => {
    // lógica da rota
    res.json({ dados });
});
```

#### Quebrando em pedaços:

```
app.metodo('/caminho', (req, res) => { ... });
 │    │         │        │    │    │
 │    │         │        │    │    └── Arrow function (função moderna do JS)
 │    │         │        │    └────── Response: objeto para ENVIAR resposta
 │    │         │        └─────────── Request: objeto com dados da REQUISIÇÃO
 │    │         └──────────────────── Caminho/URL do endpoint
 │    └────────────────────────────── Método HTTP (get, post, put, delete)
 └─────────────────────────────────── Instância do Express (nosso servidor)
```

#### Os 5 componentes de uma rota:

##### 1. `app` — A instância do Express

É o servidor que criamos com `const app = express()`. Todas as rotas são registradas nele.

##### 2. `.metodo()` — O verbo HTTP

Define qual **tipo de requisição** essa rota aceita:

```javascript
app.get(...)     // Aceita requisições GET (buscar)
app.post(...)    // Aceita requisições POST (criar)
app.put(...)     // Aceita requisições PUT (atualizar)
app.delete(...)  // Aceita requisições DELETE (remover)
```

##### 3. `'/caminho'` — A URL do endpoint

É o endereço que o cliente acessa. Exemplos:

```javascript
'/'              // Raiz: http://localhost:3000/
'/tarefas'       // Lista: http://localhost:3000/tarefas
'/tarefas/:id'   // Uma específica: http://localhost:3000/tarefas/1
```

##### 4. `(req, res)` — Os objetos de requisição e resposta

| Objeto | Nome completo | Para que serve |
|---|---|---|
| `req` | Request | Contém tudo que o **cliente enviou** (dados, parâmetros, headers) |
| `res` | Response | Usado para **enviar a resposta** de volta ao cliente |

**Principais propriedades do `req`:**

```javascript
req.body        // Corpo da requisição (dados enviados via POST/PUT)
req.params      // Parâmetros da URL (ex: :id)
req.query       // Parâmetros de consulta (ex: ?nome=joao)
```

**Principais métodos do `res`:**

```javascript
res.json({...})          // Envia resposta em JSON
res.status(201)          // Define o código de status HTTP
res.status(404).json()   // Combina status + JSON
```

##### 5. `=> { }` — Arrow Function (função de callback)

A arrow function (`=>`) é a forma moderna de escrever funções em JavaScript:

```javascript
// Forma tradicional
app.get('/tarefas', function(req, res) {
    res.json(tarefas);
});

// Arrow function (forma moderna — a que usamos)
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});
```

As duas fazem a mesma coisa. Usamos arrow functions por serem mais **curtas e modernas**.

#### Exemplo completo comentado:

```javascript
app.get('/tarefas', (req, res) => {
//  │      │            │    │
//  │      │            │    └── res = o que usamos pra responder
//  │      │            └────── req = dados que o cliente enviou
//  │      └─────────────────── URL: /tarefas
//  └────────────────────────── Método: GET (buscar dados)

    res.json(tarefas);
//  │    │      │
//  │    │      └── O que estamos enviando (o array de tarefas)
//  │    └───────── Formato da resposta (JSON)
//  └────────────── Objeto response (resposta ao cliente)
});
```

---

### Parâmetros de Rota (`:id`)

Quando colocamos `:` antes de uma palavra no caminho da rota, ela vira um **parâmetro dinâmico**:

```javascript
app.get('/tarefas/:id', (req, res) => { ... });
```

O `:id` não é literal — ele é uma **variável** que aceita qualquer valor:

```
GET /tarefas/1    → req.params.id = "1"
GET /tarefas/5    → req.params.id = "5"
GET /tarefas/42   → req.params.id = "42"
```

#### Por que usamos `parseInt()`?

O valor de `req.params.id` sempre vem como **string** (texto). Para comparar com números, precisamos converter:

```javascript
const id = parseInt(req.params.id);
// "1" (string) → 1 (número)
// "5" (string) → 5 (número)
```

Sem o `parseInt`, a comparação `"1" === 1` seria `false` (tipos diferentes).

#### Visualizando o fluxo:

```
Cliente faz: GET http://localhost:3000/tarefas/3
                                              │
                                              ▼
Express entende: rota '/tarefas/:id' onde :id = "3"
                                              │
                                              ▼
No código: const id = parseInt(req.params.id) → id = 3
                                              │
                                              ▼
Busca: tarefas.find(t => t.id === 3) → encontra a tarefa com id 3
```

---

### Desestruturação em JavaScript

Na rota POST, usamos esta sintaxe:

```javascript
const { titulo, descricao } = req.body;
```

Isso se chama **desestruturação** (destructuring). É um atalho para extrair valores de um objeto.

#### Sem desestruturação (forma longa):

```javascript
const titulo = req.body.titulo;
const descricao = req.body.descricao;
```

#### Com desestruturação (forma curta):

```javascript
const { titulo, descricao } = req.body;
```

As duas fazem **exatamente a mesma coisa**. A desestruturação é só um atalho do JavaScript moderno.

#### Outro exemplo — na rota PUT:

```javascript
const { titulo, descricao, concluida } = req.body;
// É a mesma coisa que:
// const titulo = req.body.titulo;
// const descricao = req.body.descricao;
// const concluida = req.body.concluida;
```

#### Onde o `req.body` vem?

Quando o cliente faz um POST ou PUT, ele envia dados no **corpo da requisição**:

```json
{
    "titulo": "Estudar Node.js",
    "descricao": "Aprender CRUD"
}
```

O Express (graças ao middleware `express.json()`) transforma esse JSON em um objeto JavaScript e coloca em `req.body`. Sem o `app.use(express.json())`, o `req.body` seria `undefined`.

---

### Validação Básica

Antes de criar ou modificar dados, sempre devemos **validar** o que o cliente enviou. Isso evita que dados inválidos entrem no sistema.

#### Por que validar?

Imagine que o cliente faz um POST sem enviar o título:

```json
{
    "descricao": "Sem título"
}
```

Sem validação, criaríamos uma tarefa sem título — o que não faz sentido. Com validação:

```javascript
if (!titulo) {
    return res.status(400).json({ erro: 'O campo titulo é obrigatório' });
}
```

#### Destrinchando a validação:

```javascript
if (!titulo) {
//   │  │
//   │  └── A variável titulo (extraída do req.body)
//   └───── O ! (negação) — "se NÃO existe titulo"

    return res.status(400).json({ erro: 'O campo titulo é obrigatório' });
//  │       │          │      │
//  │       │          │      └── Envia o JSON com a mensagem de erro
//  │       │          └───────── status 400 = Bad Request (requisição inválida)
//  │       └──────────────────── Objeto response
//  └──────────────────────────── return = PARA a execução da rota aqui
}
```

O `return` é crucial: sem ele, o código continuaria executando e tentaria criar a tarefa mesmo sem título.

#### Outro exemplo — verificar se a tarefa existe (READ/UPDATE/DELETE):

```javascript
const tarefa = tarefas.find(t => t.id === id);

if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
}
```

Se o cliente pedir uma tarefa com ID que não existe, retornamos `404 Not Found` em vez de um erro do servidor.

#### Usando `!==` undefined no UPDATE:

```javascript
if (titulo !== undefined) tarefa.titulo = titulo;
```

Aqui usamos `!== undefined` em vez de `!titulo` porque o cliente pode querer atualizar **apenas um campo**. Se ele enviar só `{"concluida": true}`, não queremos apagar o título. O `!== undefined` garante que **só atualizamos os campos que foram enviados**.

---

### Métodos de Array usados no CRUD

Nas rotas, usamos alguns métodos de array do JavaScript. Aqui está o que cada um faz:

| Método | O que faz | Usado em |
|---|---|---|
| `push()` | Adiciona um item ao final do array | CREATE |
| `find()` | Busca o primeiro item que atende a condição | READ ONE / UPDATE |
| `findIndex()` | Retorna o índice (posição) do item | DELETE |
| `splice(index, 1)` | Remove 1 item na posição indicada | DELETE |

#### Exemplos:

```javascript
// push — adicionar
tarefas.push(novaTarefa);
// tarefas: [{id:1, titulo:"..."}, {id:2, titulo:"..."}]

// find — buscar
const tarefa = tarefas.find(t => t.id === 1);
// tarefa: {id:1, titulo:"..."}

// findIndex — encontrar posição
const index = tarefas.findIndex(t => t.id === 1);
// index: 0 (primeira posição)

// splice — remover
tarefas.splice(index, 1);
// Remove 1 item na posição 0
```

> **`t => t.id === id`** é uma arrow function curta que compara o `id` de cada tarefa com o `id` que estamos procurando.

---

### Passo 8 — O código completo do `server.js` com CRUD

Aqui está o código completo com todas as rotas CRUD, comentado linha a linha:

```javascript
// 1 - Importa o Express
const express = require('express');

// 2 - Cria a instância do Express (nosso servidor)
const app = express();

// 3 - Define a porta do servidor
const PORT = 3000;

// 4 - Middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// 5 e 6 - "Banco de dados" temporário em memória
let tarefas = [];     // Array que armazena as tarefas
let proximoId = 1;    // Contador para gerar IDs únicos

// ============ ROTAS CRUD ============

// 7 - CREATE - Criar uma nova tarefa (POST /tarefas)
app.post('/tarefas', (req, res) => {
    const { titulo, descricao } = req.body;       // Extrai dados do corpo

    if (!titulo) {                                 // Valida: título é obrigatório
        return res.status(400).json({ erro: 'O campo titulo é obrigatório' });
    }

    const novaTarefa = {
        id: proximoId++,                           // Gera ID e incrementa o contador
        titulo,                                    // Atalho para titulo: titulo
        descricao: descricao || '',                // Se não enviou, fica vazio
        concluida: false                           // Toda tarefa começa como pendente
    };

    tarefas.push(novaTarefa);                      // Adiciona ao array
    res.status(201).json(novaTarefa);              // Responde com 201 (Created)
});

// 8 - READ ALL - Listar todas as tarefas (GET /tarefas)
app.get('/tarefas', (req, res) => {
    res.json(tarefas);                             // Retorna o array completo
});

// 9 - READ ONE - Buscar uma tarefa pelo ID (GET /tarefas/:id)
app.get('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);            // Converte string para número
    const tarefa = tarefas.find(t => t.id === id); // Busca no array

    if (!tarefa) {                                 // Se não encontrou
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    res.json(tarefa);                              // Retorna a tarefa encontrada
});

// 10 - UPDATE - Atualizar uma tarefa (PUT /tarefas/:id)
app.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    const { titulo, descricao, concluida } = req.body;

    // Atualiza APENAS os campos que foram enviados
    if (titulo !== undefined) tarefa.titulo = titulo;
    if (descricao !== undefined) tarefa.descricao = descricao;
    if (concluida !== undefined) tarefa.concluida = concluida;

    res.json(tarefa);                              // Retorna a tarefa atualizada
});

// 11 - DELETE - Deletar uma tarefa (DELETE /tarefas/:id)
app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tarefas.findIndex(t => t.id === id);  // Encontra a posição

    if (index === -1) {                            // -1 = não encontrou
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    tarefas.splice(index, 1);                      // Remove 1 item na posição
    res.json({ mensagem: 'Tarefa deletada com sucesso' });
});

// 12 - Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

### Estrutura atual do projeto

```
Estudos/
  └── fullstack-angular-node/
        ├── ESTUDO-PASSO-A-PASSO.md     ← este arquivo
        └── node-api/
              ├── package.json           ← configuração do projeto
              ├── package-lock.json      ← versões travadas das dependências
              ├── node_modules/          ← bibliotecas instaladas (Express)
              └── server.js              ← servidor com CRUD completo ✅
```

---

## Conceitos Aprendidos na Fase 5

| Conceito | O que é |
|---|---|
| **CRUD** | Create, Read, Update, Delete — as 4 operações básicas de qualquer sistema |
| **Endpoint** | URL + método HTTP que a API disponibiliza (ex: `GET /tarefas`) |
| **Parâmetro de rota** | Variável na URL indicada com `:` (ex: `/tarefas/:id`) |
| **req.body** | Corpo da requisição — dados enviados pelo cliente (POST/PUT) |
| **req.params** | Parâmetros da URL (ex: `req.params.id`) |
| **Desestruturação** | Sintaxe `const { x } = obj` para extrair propriedades de um objeto |
| **Validação** | Verificar se os dados estão corretos antes de processar |
| **Status HTTP** | Código numérico que indica o resultado (200, 201, 400, 404) |
| **Array em memória** | Armazenamento temporário sem banco de dados |

---

## Fase 6 — Testando a API

Agora que o CRUD está pronto, precisamos **testar cada rota** para garantir que tudo funciona como esperado — tanto os cenários de sucesso quanto os de erro.

### Como testar?

No Windows, usamos o comando `Invoke-RestMethod` do PowerShell, que é o equivalente do `curl` no Linux/Mac. Ele faz requisições HTTP direto pelo terminal.

> **Importante:** O servidor precisa estar rodando em outro terminal (`node server.js`) enquanto você testa.

### Passo 9 — Rodar o servidor

Abra um terminal na pasta `node-api/` e inicie o servidor:

```bash
node server.js
```

Deve aparecer:

```
Servidor rodando em http://localhost:3000
```

Agora abra **outro terminal** para enviar as requisições de teste.

---

### Passo 10 — Testando o CREATE (POST /tarefas)

Cria uma nova tarefa enviando `titulo` e `descricao` no corpo da requisição:

```powershell
Invoke-RestMethod -Method POST -Uri http://localhost:3000/tarefas -ContentType "application/json" -Body '{"titulo": "Estudar Node.js", "descricao": "Aprender a criar APIs REST"}'
```

**Resposta esperada (status 201 — Created):**

```json
{
    "id": 1,
    "titulo": "Estudar Node.js",
    "descricao": "Aprender a criar APIs REST",
    "concluida": false
}
```

Vamos criar mais uma tarefa:

```powershell
Invoke-RestMethod -Method POST -Uri http://localhost:3000/tarefas -ContentType "application/json" -Body '{"titulo": "Estudar Angular", "descricao": "Criar o frontend"}'
```

**Resposta:**

```json
{
    "id": 2,
    "titulo": "Estudar Angular",
    "descricao": "Criar o frontend",
    "concluida": false
}
```

> Repare que o `id` foi incrementado automaticamente de 1 para 2 — é o `proximoId++` funcionando.

---

### Passo 11 — Testando o READ ALL (GET /tarefas)

Lista todas as tarefas cadastradas:

```powershell
Invoke-RestMethod -Uri http://localhost:3000/tarefas | ConvertTo-Json
```

**Resposta:**

```json
[
    {
        "id": 1,
        "titulo": "Estudar Node.js",
        "descricao": "Aprender a criar APIs REST",
        "concluida": false
    },
    {
        "id": 2,
        "titulo": "Estudar Angular",
        "descricao": "Criar o frontend",
        "concluida": false
    }
]
```

> Usamos `| ConvertTo-Json` para ver o JSON formatado no PowerShell.

---

### Passo 12 — Testando o READ ONE (GET /tarefas/:id)

Busca uma tarefa específica pelo ID:

```powershell
Invoke-RestMethod -Uri http://localhost:3000/tarefas/1 | ConvertTo-Json
```

**Resposta:**

```json
{
    "id": 1,
    "titulo": "Estudar Node.js",
    "descricao": "Aprender a criar APIs REST",
    "concluida": false
}
```

---

### Passo 13 — Testando o UPDATE (PUT /tarefas/:id)

Atualiza a tarefa 1, marcando-a como concluída (enviando **apenas** o campo que queremos mudar):

```powershell
Invoke-RestMethod -Method PUT -Uri http://localhost:3000/tarefas/1 -ContentType "application/json" -Body '{"concluida": true}' | ConvertTo-Json
```

**Resposta:**

```json
{
    "id": 1,
    "titulo": "Estudar Node.js",
    "descricao": "Aprender a criar APIs REST",
    "concluida": true
}
```

> Repare: `concluida` mudou de `false` para `true`, mas `titulo` e `descricao` continuaram intactos. Isso acontece porque usamos `if (campo !== undefined)` — só atualiza o que foi enviado.

---

### Passo 14 — Testando o DELETE (DELETE /tarefas/:id)

Deleta a tarefa 1:

```powershell
Invoke-RestMethod -Method DELETE -Uri http://localhost:3000/tarefas/1 | ConvertTo-Json
```

**Resposta:**

```json
{
    "mensagem": "Tarefa deletada com sucesso"
}
```

Para confirmar, listamos novamente:

```powershell
Invoke-RestMethod -Uri http://localhost:3000/tarefas | ConvertTo-Json
```

**Resposta — só resta a tarefa 2:**

```json
[
    {
        "id": 2,
        "titulo": "Estudar Angular",
        "descricao": "Criar o frontend",
        "concluida": false
    }
]
```

---

### Passo 15 — Testando cenários de ERRO

Uma API boa não testa só os cenários felizes — ela precisa responder **corretamente** quando algo dá errado.

#### Erro 1: Criar tarefa sem título (retorna 400 — Bad Request)

```powershell
try {
    Invoke-RestMethod -Method POST -Uri http://localhost:3000/tarefas -ContentType "application/json" -Body '{"descricao": "Sem titulo"}'
} catch {
    $_.ErrorDetails.Message
}
```

**Resposta:**

```json
{
    "erro": "O campo titulo é obrigatório"
}
```

> Usamos `try/catch` no PowerShell porque erros HTTP (400, 404) lançam exceções.

#### Erro 2: Buscar tarefa que não existe (retorna 404 — Not Found)

```powershell
try {
    Invoke-RestMethod -Uri http://localhost:3000/tarefas/999
} catch {
    $_.ErrorDetails.Message
}
```

**Resposta:**

```json
{
    "erro": "Tarefa não encontrada"
}
```

#### Erro 3: Deletar tarefa que não existe (retorna 404 — Not Found)

```powershell
try {
    Invoke-RestMethod -Method DELETE -Uri http://localhost:3000/tarefas/999
} catch {
    $_.ErrorDetails.Message
}
```

**Resposta:**

```json
{
    "erro": "Tarefa não encontrada"
}
```

---

### Resumo dos Testes

| # | Teste | Método | Endpoint | Resultado |
|---|---|---|---|---|
| 1 | Criar tarefa | POST | `/tarefas` | ✅ 201 Created |
| 2 | Listar todas | GET | `/tarefas` | ✅ 200 OK |
| 3 | Buscar por ID | GET | `/tarefas/1` | ✅ 200 OK |
| 4 | Atualizar | PUT | `/tarefas/1` | ✅ 200 OK |
| 5 | Deletar | DELETE | `/tarefas/1` | ✅ 200 OK |
| 6 | Criar sem título | POST | `/tarefas` | ✅ 400 Bad Request |
| 7 | Buscar inexistente | GET | `/tarefas/999` | ✅ 404 Not Found |
| 8 | Deletar inexistente | DELETE | `/tarefas/999` | ✅ 404 Not Found |

> **Todos os 8 testes passaram!** A API está funcionando perfeitamente.

---

## Conceitos Aprendidos na Fase 6

| Conceito | O que é |
|---|---|
| **Invoke-RestMethod** | Comando do PowerShell para fazer requisições HTTP (equivalente ao `curl`) |
| **ConvertTo-Json** | Converte a resposta para JSON formatado (melhor visualização) |
| **try/catch** | Estrutura para capturar erros — necessário quando a API retorna status de erro (400, 404) |
| **Cenários de erro** | Testar não só o "caminho feliz", mas também as situações de falha |
| **Teste manual** | Validar cada endpoint individualmente antes de conectar com o frontend |

---

## Próximos Passos

- [x] Criar rotas CRUD completas (GET, POST, PUT, DELETE)
- [x] Testar todas as rotas da API
- [ ] Organizar rotas em arquivos separados
- [ ] Conectar com banco de dados
- [ ] Adicionar validação e tratamento de erros avançado
- [ ] Criar o frontend com Angular
- [ ] Integrar Angular com a API Node.js

---

> **Dica:** Sempre que quiser voltar nesse material, ele estará aqui em `ESTUDO-PASSO-A-PASSO.md`. Vamos atualizando conforme avançamos!
