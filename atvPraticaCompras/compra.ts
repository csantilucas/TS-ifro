import { metodoPgto, metodosPagamentos, status } from "./metodos"
import { carrinho} from "./produtos"




export default interface compra {
    itens:carrinho[]//{produto:produto,quantidade:number}[]
    tipo_metodo: metodosPagamentos,
    metodo: object
}




let compras: compra[] = []

const dataPagamentoBoleto: Date = new Date('2025-11-28T15:28:05.604')
export function fazerCompra(itens: carrinho[]/*{produto:produto,quantidade:number}[]*/, metodo: metodosPagamentos, status: status, parcelas?: number) {

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
    
    console.log(`Valor Toltal:${tipoPagamento.valor.toFixed(2)}`)
    compras.push(compraCompleta)
    
  
    return compraCompleta;
}



