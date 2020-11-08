const { request } = require("express");

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Cliente = require('../models/Cliente');
const Endereco = require("../models/Endereco");
const Produto = require("../models/Produto");
const Pedidos = require("../models/Pedidos");
const PedidoProduto = require("../models/PedidoProduto");

const connection = new Sequelize(dbConfig);

Cliente.init(connection);
Endereco.init(connection);
Produto.init(connection);
Pedidos.init(connection);
PedidoProduto.init(connection);

Cliente.associate(connection.models);
Endereco.associate(connection.models);
Produto.associate(connection.models);
Pedidos.associate(connection.models);
PedidoProduto.associate(connection.models);

module.exports = connection;