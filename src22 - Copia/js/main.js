// Facilita a criação do servidor web
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Classes do backend
const Freight = require('./Freight');
const Screen = require('./Screen');
const Validator = require('./Validator');

const freight = new Freight();
const screen = new Screen();
const validator = new Validator();

// Defini a rota para servir a página HTML
app.get('/', function(req, res) {
    // Caminho para o arquivo index.html usando path.join
    const indexPath = path.join(__dirname, '../index.html');
    res.sendFile(indexPath);
});

// Retorno da porta
app.listen(PORT, function() {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Configura o middleware para receber dados do formulário
app.use(express.urlencoded({ extended: true }));

// Defini a rota para receber os dados do formulário
app.post('/frete', async function(req, res) {
    
    // Pega o CEP do formulário
    const cep = req.body.cep;

    console.log(cep)
    
    // Valida o CEP
    //const isNumber = Validator.validateChar(cep);
    //console.log(isNumber)
    const isLength = Validator.validateLength(cep);
    console.log(isLength)
    const isEmpty = Validator.validateEmptyInput(cep);
    console.log(isEmpty)
    const isValid = isLength && isEmpty //&& isNumber
    
    if (isValid) {
        const response = await freight.consultarCep(cep);
        console.log(response)
    } else {
        
    }
});

