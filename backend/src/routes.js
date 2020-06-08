const express = require('express');
const routes =  express.Router();
const connection = require('./database/connection');

// Importação de arquivos com lógicas de aplicação
const unidadeController = require('./controllers/unidadeController');
const quadraController = require('./controllers/quadraController');
const professorController = require('./controllers/professorController');
const operadorController = require('./controllers/operadorController');
const calendariocontroller = require('./controllers/calendarioController');
const agendamentoController = require('./controllers/agendamentoController');

// atribuição de rotas para as funções dos arquivos (funções Create e Select do BD)
routes.post('/cadastrounidade', unidadeController.create);
routes.post('/cadastroquadra', quadraController.create);
routes.post('/cadastroprofessor', professorController.create);
routes.post('/cadastrooperador', operadorController.create);
routes.post('/cadastrocalendario', calendariocontroller.create);
routes.post('/agendamento', agendamentoController.create);
routes.get('/agendamento', agendamentoController.index);


module.exports = routes;