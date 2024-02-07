import Screen from "./Screen.js";
import Validator from "./Validator.js";

class Freight {
    constructor() {
        this.screen = new Screen

        if(this.screen) {
            this.screen.cepInput.addEventListener('keypress', Validator.validateChar)
            this.screen.form.addEventListener('submit', this.sendCep.bind(this))
            this.screen.cepInput.addEventListener('paste', e => e.preventDefault())
        }
    }

    //Envio do CEP para cálculo do frete
    sendCep(e) {
        e.preventDefault()
        if(!Validator.validateEmptyInput(this.screen.cepInput.value)){
            this.screen.showEmptyInputMessage()
            return
        }
        if(!Validator.validateLength(this.screen.cepInput.value)){
            this.screen.showLengthInputMessage()
            return
        } 
        this.screen.resetMessageAndBorderColor()
        console.log('Passou nas validações')
    }
}

export default Freight;