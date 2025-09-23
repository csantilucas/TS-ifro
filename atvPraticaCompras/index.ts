import { boleto, metodosPagamentos, statusBoleto } from "./metodos"
import { fogao, geladeira, produto } from "./produtos"

interface compra {
    nome_produto: string
    tipo_metodo: metodosPagamentos,
    boleto:boleto
}

function generateID(): string {

    return Math.random().toString(36).slice(-8);
}
function gerarBoleto(valorTotal:number, tipo: statusBoleto): boleto {
    let data:Date = new Date()
    let novadata: Date = new Date(data.getTime() + (30 * 24 * 60 * 60 * 1000))
    const novoBoleto: boleto = {
        numero: generateID(),
        valor: valorTotal,
        dataVencimento: novadata,
        // Correção 2: Usando o parâmetro 'tipo' diretamente
        status: tipo
    }
    return novoBoleto
}
function fazerCompra(produtos: produto[], metodo: metodosPagamentos, tipo: statusBoleto) {

  
    const valorTotal = produtos.reduce((soma, produtoAtual) => {
        return soma + produtoAtual.preco;
    }, 0);

  
    const novoBoleto = gerarBoleto(valorTotal, tipo)
 
    const compraCompleta: compra = {
        nome_produto: produtos,
        tipo_metodo: metodo,
        boleto: novoBoleto
    }
    console.log(compraCompleta)
    return compraCompleta
}


fazerCompra([geladeira, fogao], metodosPagamentos.BOLETO, statusBoleto.PAGO)



