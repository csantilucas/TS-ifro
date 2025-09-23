import { produto } from "./produtos";

enum metodosPagamentos {
        BOLETO = 'boleto',
        PIX = 'pix',
        DEBITO = 'debito'
}




enum statusBoleto{

        PENDENTE = 'pendente',
        PAGO = 'pago',
        VENCIDO = 'vencido'
}


interface boleto {
        numero: string
        valor: number,
        dataVencimento: Date,
        status: string
    }


export {metodosPagamentos, statusBoleto, boleto};