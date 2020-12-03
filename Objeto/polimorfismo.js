//Polimorfismo: utilizar os metodos da classe pai, e sobreescrevelos conforme queria;

//Classe Pai
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if(valor > this.saldo){
        console.log(`saldo insulficiente ${this.saldo}`);
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log('agencia/conta '+this.agencia + '/' + this.conta + ', saldo: ' + this.saldo);
};

const conta1 = new Conta(11, 22, 500);

// conta1.depositar(58);
// conta1.sacar(802);

//--------------------------------CONTA CORRENTE----------------------------------//

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)                         //herdando as caracteristicas de Conta
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);                   //Passando o prototype de Conta para CC, ou seja passando os metodos de pai p filho
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {                             //sobreescrevendo o metodo sacar
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo excedido ${this.saldo}`);
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
};

const cc = new CC(33, 44, 0, 100);

// cc.depositar(10);
// cc.sacar(110);
// cc.sacar(1);


//--------------------------------CONTA POUPANÇA----------------------------------//

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)                         //herdando as caracteristicas de Conta
}

CP.prototype = Object.create(Conta.prototype);                   //Passando o prototype de Conta para CC, ou seja passando os metodos de pai p filho
CP.prototype.constructor = CP;

const cp = new CP(55, 66, 0)

cp.depositar(10);
cp.sacar(10);
cp.sacar(1);