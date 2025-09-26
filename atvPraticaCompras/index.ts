
import { metodoPgto, metodosPagamentos, status } from "./metodos"
import { fogao, geladeira, produto } from "./produtos"



let pix = metodosPagamentos.PIX
let cartao = metodosPagamentos.CARTAO
let boleto = metodosPagamentos.BOLETO
let debito = metodosPagamentos.DEBITO




interface compra {
    itens: {produto:produto,
    quantidade:number}[]//carrinho[]
    tipo_metodo: metodosPagamentos,
    metodo: object
}

let compras: compra[] = []

const dataPagamentoBoleto: Date = new Date('2025-11-24T15:28:05.604')

function fazerCompra(itens:carrinho[], metodo: metodosPagamentos, status: status, parcelas?: number) {

    //reduce para somar os valores
    let valorTotal = itens.reduce((soma, itemAtual) => {
        const subtotal = itemAtual.produto.preco* itemAtual.quantidade;
        return soma + subtotal;
    }, 0);

    console.log(`Valor total dos produtos: R$ ${valorTotal.toFixed(2)}`);
    let tipoPagamento = metodoPgto(metodo, valorTotal, status, dataPagamentoBoleto, parcelas || 0);

    const compraCompleta: compra = {
        itens: itens,
        tipo_metodo: metodo,
        metodo: tipoPagamento
    }
    
  
    compras.push(compraCompleta)
    
  
    return compraCompleta;
}

interface carrinho{
    produto:produto,
    quantidade:number
}

const meuCarrinho: carrinho[] = [
    { produto: geladeira, quantidade: 1 },
    { produto: fogao, quantidade: 2 }
];


fazerCompra(meuCarrinho, cartao, status.PENDENTE, 9);
console.log(JSON.stringify(compras, null, 2));


