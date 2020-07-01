const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express();

/**
* Rota e recurso
*/

/**
* Métodos HTTP:
* GET: Buscar/listar uma informação do backend
* POST: Criar uma informação no backend
* PUT: Alterar uma informação no backend (update)
* DELETE: Excluir uma informação no backend
*/

/**
* Tipos de parâmetros:
* Query Params (request.query): Parâmetos nomeados enviados na rota após o símbolo de "?" (Filtros, paginação, etc)
* Route Params (request.params): Parâmetros utilizados para identificar recursos
* Request Body (request.body): Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;