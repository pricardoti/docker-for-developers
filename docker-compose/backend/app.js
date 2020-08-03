const express = require('express');
const restful = require('node-restful');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
const mongoose = restful.mongoose;

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb', { useMongoClient: true, useNewUrlParser: true, useUnifiedTopology: true });

// Middwelares
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

// ODM (Mapeamento Objeto/Documento)
const Client = restful.model('Client', {
     name: { type: String, required: true }
 });

 // Rest API
 Client.methods(['get', 'post', 'put', 'delete']);
 Client.updateOptions({ new: true, runValidators: true });

 // Routes
 Client.register(server, '/clients')

// Start Server
server.listen(3000);