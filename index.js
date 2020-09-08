import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Julio", 85858528)

const cliente2 = new Cliente("Alice", 655665656)

const contaDoJulio = new ContaCorrente(100, cliente1)

const contaDaAlice = new ContaCorrente(100, cliente2)



//Conta do Julio
console.log("Saldo conta do Julio")
console.log(contaDoJulio.saldo)
console.log("Depositando 50 na conta do Julio")
contaDoJulio.depositar(50)
console.log(contaDoJulio.saldo)
console.log("Saldo conta do Julio")
console.log(contaDoJulio.saldo)
console.log("Sacando 10 da conta do Julio")
contaDoJulio.sacar(10)
console.log("Saldo conta do Julio")
console.log(contaDoJulio.saldo)
console.log("Transferindo 10 da conta do Julio para conta da Alice")
contaDoJulio.transferir(10, contaDaAlice)
console.log("Saldo conta do Julio")
console.log(contaDoJulio.saldo)

console.log("#####################################")

//Conta da Alice
console.log("Saldo conta da Alice")
console.log(contaDaAlice.saldo)
console.log("Depositando 50 na conta da Alice")
contaDaAlice.depositar(70)
console.log(contaDaAlice.saldo)
console.log("Saldo conta da Alice")
console.log(contaDaAlice.saldo)
console.log("Sacando 30 da conta da Alice")
contaDaAlice.sacar(30)
console.log("Saldo conta da Alice")
console.log(contaDaAlice.saldo)
console.log("Transferindo 20 da conta da Alice para conta do Julio")
contaDaAlice.transferir(10, contaDaAlice)
console.log("Saldo conta da Alice")
console.log(contaDaAlice.saldo)

console.log("#####################################")

console.log(contaDoJulio)

console.log("#####################################")

console.log(contaDaAlice)

console.log("#####################################")

console.log("Número de contas")
console.log(ContaCorrente.numeroDeContas)