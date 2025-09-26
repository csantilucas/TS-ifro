import { gerarBoleto, gerarPgtoCartao, gerarPgtoDebito, gerarPgtoPix } from "./tipoPgto"

enum metodosPagamentos {
        BOLETO = 'boleto',
        PIX = 'pix',
        DEBITO = 'debito',
        CARTAO = 'cartao de credito'
}

enum status {
        PENDENTE = 'pendente',
        PAGO = 'pago',
        VENCIDO = 'vencido'
}


export function metodoPgto(metodo: metodosPagamentos, valorTotal: number, status: status, dataPagamentoBoleto: Date, quantparcelas: number) {

        const pix = metodosPagamentos.PIX
        const debito = metodosPagamentos.DEBITO
        const cartao = metodosPagamentos.CARTAO
        const boleto = metodosPagamentos.BOLETO
        const numparcelas = quantparcelas


        switch (metodo) {
                case pix:
                        valorTotal = valorTotal * 0.95

                        console.log(`desconto de 5% sobre o valor da compra. O valor com desconto ${valorTotal.toFixed(2)}`)
                        let novoPgtoPix = gerarPgtoPix(valorTotal, status)
                        return novoPgtoPix


                case debito:
                        console.log(`não há desconto nem juros.`)
                        let novoPgtoDebito = gerarPgtoDebito(valorTotal, status)
                        return novoPgtoDebito
                case cartao:

                        if (quantparcelas > 0) {
                                let parcelas: number;
                                if (quantparcelas <= 5) {
                                        parcelas = valorTotal / quantparcelas;
                                        console.log(`Compra parcelada em ${quantparcelas}x sem juros de ${parcelas.toFixed(2)}`);
                                } else {
                                        valorTotal = valorTotal * 1.08; // Juros de 8% para mais de 5 parcelas
                                        parcelas = valorTotal / quantparcelas;
                                        console.log(`Compra parcelada em ${quantparcelas}x com juros de ${parcelas.toFixed(2)}`);
                                }
                                let novoPgtoCartao = gerarPgtoCartao(valorTotal, status, parcelas, quantparcelas);
                                return novoPgtoCartao;
                        } else {
                                console.log(`Nenhuma parcela selecionada, crédito à vista.`);
                                let novoPgtoCartao = gerarPgtoCartao(valorTotal, status, valorTotal, 1);
                                return novoPgtoCartao;
                        }
                case boleto:
                        let novoBoleto = gerarBoleto(valorTotal, status)
                        if (dataPagamentoBoleto > novoBoleto.dataVencimento) {
                                let getime: number = (dataPagamentoBoleto.getTime() - novoBoleto.dataVencimento.getTime()) / (1000 * 3600 * 24)
                                let dias = Math.round(getime)
                                console.log(`boleto em ${dias} dias de atraso, aplicar 2% de multa fixa + 0,1% ao dia de atraso.`)
                                valorTotal = valorTotal * 1.2
                                for (let i = 0; i < dias; i++) {
                                        valorTotal=valorTotal * 1.01
                                }
                                
                        } else (
                                console.log('o boleto esta em dia')
                        )
                        return gerarBoleto(valorTotal, status);
        }

}


export { metodosPagamentos, status };


