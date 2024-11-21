const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index); //Vai fazer um select no banco (vamos buscar os dados)
routes.post('/users', UserController.store); //Vai fazer um insert no banco (vamos criar um objeto novo)

routes.put('/user/:id', UserController.updateUser); //Vamos alterar um ou mais campos do objeto no banco (vai fazer um UPDATE)
// Como sabemos o que iremos alterar pelo id?
routes.patch('/user/:id', UserController.updateUserPatch); //Vamos alterar todos os campos do objeto no banco (vai fazer um UPDATE)

routes.delete('/user/:id', UserController.deleteUser); //Vai fazer um DELETE no banco (vamos delete um objeto existente)


module.exports = routes;