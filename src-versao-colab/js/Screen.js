class Screen {
    constructor() {
        this.cepInput = document.getElementById('cep')
        this.form = document.getElementById('form')
        this.message = document.getElementById('message')
    }

    showEmptyInputMessage() {
        this.message.innerHTML = 'Preencha o CEP'
        this.changeInputBorderColorToRed()
    }

    showLengthInputMessage() {
        this.message.innerHTML = 'Seu CEP deve conter 8 números'
        this.cepInput.value = ''
        this.changeInputBorderColorToRed()
    }

    changeInputBorderColorToRed() {
        this.cepInput.style.borderColor = 'red'
    }

    resetMessageAndBorderColor() {
        this.cepInput.style.borderColor = ''
        this.message.innerHTML = ''
    }
}

export default Screen