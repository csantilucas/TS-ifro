import { status } from "./metodos";
function generateID(): string {
    return Math.random().toString(36).slice(-8);
}

interface boleto {
        numero: string
        valor: number,
        dataEmissao: Date,
        dataVencimento: Date,
        status: string
}

export function gerarBoleto(valorTotal:number, status: status) {
    let data:Date = new Date()
    let novadata: Date = new Date(data.getTime() + (30 * 24 * 60 * 60 * 1000))
    const novoBoleto: boleto = {
        numero: generateID(),
        valor: valorTotal,
        dataEmissao:data,
        dataVencimento: novadata,
        status: status
    }
    return novoBoleto
}

interface cartao {
        idPgto: string
        valor: number,
        valorParcela:number,
        numParcelas:number ,
        status: string,
}

export function gerarPgtoCartao(valorTotal:number, status: status, parcelas:number,totalParcelas:number) {
    
    const novoPgto: cartao = {
        idPgto: generateID(),
        valor: valorTotal,
        valorParcela:parcelas,
        numParcelas:totalParcelas,
        status: status
    }
    return novoPgto
}

interface pix {
        idPgto: string
        valor: number,
        status: string,
}

export function gerarPgtoPix(valorTotal:number, status: status) {
    
    const novoPgto: pix = {
        idPgto: generateID(),
        valor: valorTotal,
        status: status
    }
    return novoPgto
}


export function gerarPgtoDebito(valorTotal:number, status: status) {
    
    const novoPgto: pix = {
        idPgto: generateID(),
        valor: valorTotal,
        status: status
    }
    return novoPgto
}





