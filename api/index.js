const express = require('express');
const morgan = require('morgan');
const fetch = require('node-fetch');

const server = express();

server.name = 'API';

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', '*'); // Indica que permite el ingreso de todos los metodos
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Solo recibe peticiones de la URL indicada
  res.header('Access-Control-Allow-Credentials', 'true'); // Setea en true las credenciales de las peticiones
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// RUTAS

server.get('/api/search', (req, res, next) => {
  res.status(200).send(req.query);
});

// FIN RUTAS

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.listen(8080, () => {
  console.log("---> Listening at port 8080");
});