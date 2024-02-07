class Validator {
    // Validação para aceitar somente números
    static validateChar(e) {
        const numbersRegex = /[0-9]/
        const testInput = numbersRegex.test(String.fromCharCode(e.keyCode))
        !testInput ? e.preventDefault() : null
    }

    // Validação do tamanho do CEP 
    static validateLength(inputValue) {
        return inputValue.length == 9 ? true : false
    }

    // Validação para entrada vazia
    static validateEmptyInput(inputValue) {
        return inputValue !== '' && inputValue !== null ? true : false
    }
}

export default Validator;