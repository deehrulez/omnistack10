const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
mongoose.connect('mongodb+srv://deehrulez:7820andre@cluster0-a50am.mongodb.net/week10?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true,
});

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)
app.get('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World' });
});

app.listen(3333);1