const express = require('express');
const ClienteController = require('./controllers/ClienteController');


const routes = express.Router();

routes.get('/cliente', ClienteController.index);
routes.post('/cliente', ClienteController.store);

// routes.get('/users/:user_id/addresses', AdressController.index);
// routes.post('/users/:user_id/addresses', AdressController.store); 

// routes.get('/users/:user_id/techs', TechController.index);
// routes.post('/users/:user_id/techs', TechController.store); 
// routes.delete('/users/:user_id/techs', TechController.delete); 

// routes.get('/report', ReportController.show);

module.exports = routes;