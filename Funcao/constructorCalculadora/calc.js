function Calculadora(){

        this.display = document.querySelector('.display'),                //pegar pela class.
        this.btnClear = document.querySelector('.btn-clear'),

        this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.cliqueBotoes = () => {
            document.addEventListener('click', (e) => {
                const el = e.target;

                //verificando se no elemento do click tem a class btn-num. //innerText: pega o que esta contido no label do botao.
                if(el.classList.contains('btn-num')) this.btnAddDisplay(el.innerText); 

                if(el.classList.contains('btn-clear')) this.clearDisplay();

                if(el.classList.contains('btn-del')) this.apagaUm();

                if(el.classList.contains('btn-eq')) this.realizaConta() ;
            });                  
        };

        this.btnAddDisplay = (valor) => {
            this.display.value += valor;
            this.display.focus();                       //para remover o foco dos botoes e deixar apenas no display.
        };

        this.clearDisplay = () => this.display.value = '';

        this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);          //funcão para apagar o ultimo caracter

        this.pressionaEnter = () => {                       //executar apos pressionar o botão enter;
            document.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    console.log('entrouu')
                    this.realizaConta();
                }
                console.log(e.keyCode)
            })
        };

        this.realizaConta = () => {
            let conta =  eval(this.display.value);              //realizar a conta que contem dentro da string  //PERIGOSO ESSE eval.
            try {           
                if (!conta) {
                    alert('Conta invalida');
                    return;
                }
                this.display.value = conta;

            } catch (e) {
                alert('Conta invalida');
                return
            }
        };
}

const calculadora = new Calculadora();
calculadora.inicia();