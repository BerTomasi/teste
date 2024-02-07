// Facilita a realização de requisições HTTP
const axios = require('axios');

class Freight {
    
    constructor() {}

    async consultarCep(cep) {
        
        try {
            const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
            const response = await axios.get(apiUrl);
            
            return response.data;
        } catch (error) {
            console.error('Erro na consulta de CEP:', error.message);
            throw new Error('Erro ao consultar o CEP');
        }
    }
}

module.exports = Freight;
