const express = require('express');
const ClienteController = require('./controllers/ClienteController');
const EnderecoController = require('./controllers/EnderecoController');
const ProdutoController = require('./controllers/ProdutoController');
const PedidosController = require('./controllers/PedidosController');


const routes = express.Router();

routes.get('/cliente', ClienteController.index);
routes.post('/cliente', ClienteController.store);

routes.get('/cliente/:cliente_id/enderecos', EnderecoController.index);
routes.post('/cliente/:cliente_id/enderecos', EnderecoController.store); 

routes.post('/produto', ProdutoController.store);

routes.post('/pedidos', PedidosController.gravarPedido);

// routes.get('/users/:user_id/techs', TechController.index);
// routes.post('/users/:user_id/techs', TechController.store); 
// routes.delete('/users/:user_id/techs', TechController.delete); 

// routes.get('/report', ReportController.show);

module.exports = routes;