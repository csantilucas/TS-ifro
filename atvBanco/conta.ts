import Agencias, { Agencia0001 } from "./agencia"
import {Cliente, C1 } from "./cliente"

enum TipoConta{
    Poupanca='conta pupança',
    Corrente='conta corrente',
    Salario='conta salario'
}

export interface Conta{
    Cliente:Cliente
    numconta:number
    tipoConta:TipoConta
    agencia:Agencias
    saldo:number
}

let conta1:Conta={
    Cliente:C1,
    numconta:1,
    tipoConta:TipoConta.Poupanca,
    agencia:Agencia0001,
    saldo:100
}


export {conta1}


