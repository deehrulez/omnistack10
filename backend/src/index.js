const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://deehrulez:7820andre@cluster0-a50am.mongodb.net/week10?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);1