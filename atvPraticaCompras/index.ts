import { metodoPgto, metodosPagamentos, status } from "./metodos"
import { fogao, geladeira, produto } from "./produtos"


const pix = metodosPagamentos.PIX
const debito = metodosPagamentos.DEBITO
const cartao = metodosPagamentos.CARTAO
const boleto = metodosPagamentos.BOLETO


const compra:compra[] = []

interface compra {
    nome_produto: produto[]
    tipo_metodo: metodosPagamentos,
    metodo: object
}


const dataPagamentoBoleto: Date = new Date('2025-11-24T15:28:05.604')



function fazerCompra(produtos: produto[], metodo: metodosPagamentos, status: status, parcelas?: number) {

    let valorTotal = produtos.reduce((soma, produtoAtual) => {
        return soma + produtoAtual.preco;
    }, 0);



    let tipoPagamento = metodoPgto(metodo, valorTotal, status, dataPagamentoBoleto, parcelas || 0);

    const compraCompleta: compra = {
        nome_produto: produtos,
        tipo_metodo: metodo,
        metodo: tipoPagamento
    }

    console.log(`valor total da compra:${ valorTotal}
produtos comprados:\n`)
    produtos.forEach(element => {
        let nomes = element.nome
        let valor = element.preco
        console.log(nomes,':' , valor)
    });
    console.log(`\n`)



    compra.push(compraCompleta)
   
    return compraCompleta
}


fazerCompra([geladeira, fogao], pix, status.PENDENTE)
console.log(compra)







