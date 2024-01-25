class ContaBancaria{
  #saldo
  #validarValor(valor){
    return typeof valor === "number" && !isNaN(valor) && valor >0
  }
  #atualizarValor(valor){
    this.#saldo += valor
  }
  constructor(saldoInicial) {
 this.#saldo= saldoInicial
  }
  depositar(valor){
    if(this.#validarValor(valor)){
      this.#atualizarValor(valor)
      console.log(`Depósito de $${valor} realizado. Novo saldo: $${this.#saldo}`);
    }else{
      console.error("Valor de  deposito inválido")
    }
  }
  sacar(valor){
    if(this.#validarValor(valor)&& valor <= this.#saldo){
      this.#atualizarValor(-valor)
      console.log(`Saque de $${valor} realizado. Novo saldo: $${this.#saldo}`);
    }else{
      console.error("Valor de saque inválido ou saldo insuficiente. ")
    }
  }
  informarSaldo(){
    console.log(`Saldo atual: $${this.#saldo}`);
  }
  
}
const conta = new ContaBancaria(500);
  conta.depositar(400); 
  conta.sacar(200); 
  conta.informarSaldo(); 