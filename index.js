const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConection } = require('./database/config');

//CREO SERVIDOR
const app = express();
app.use(cors());
const port = process.env.PORT;

dbConection();

app.use(express.static('public'));

//transformar el body a json
app.use(express.json());

// CREO RUTAS
//TODO: rutas de la aplicación
app.use('/api/streams/', require('./routes/streams.js'));

//ESCUCHAR EL PUERTO, PRIMER ARGUMENTO EL PUERTO, SEGUNDO LA FUNCION
app.listen(port, () => {
  console.log(`listening in PORT http://localhost:${port}`);
});
