import compra, { fazerCompra } from "./compra"
import { metodosPagamentos, status } from "./metodos"
import {fogao, geladeira, produto, TV, carrinho } from "./produtos"



let pix = metodosPagamentos.PIX
let cartao = metodosPagamentos.CARTAO
let boleto = metodosPagamentos.BOLETO
let debito = metodosPagamentos.DEBITO



const meuCarrinho = [
    { produto: geladeira, quantidade: 1 },
    { produto: fogao, quantidade: 2 },
    { produto:TV, quantidade:4}
];

fazerCompra( meuCarrinho, cartao, status.PENDENTE,5);
//console.log(JSON.stringify(compras, null, 2));


