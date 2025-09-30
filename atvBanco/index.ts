/*
banco => Agencia => Gerente =>

Cliente =>

Conta bancária => corrente, poupança, salario
- Saldo
- Saque
- Depósito
- Transferencia
*/

import { Conta, conta1 } from "./conta";


function saldo(conta:Conta){
    return conta.saldo
}

function sacar( conta:Conta,saque:number){
    conta.saldo-=saque
}

function depositar(conta:Conta, deposito:number){
    conta.saldo+= deposito
}

console.log(saldo(conta1))
sacar(conta1, 50)
console.log(saldo(conta1))
depositar(conta1, 1200)
console.log(saldo(conta1))

console.log(conta1)