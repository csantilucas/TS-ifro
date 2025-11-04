import { ItemCompra } from "./model_itemCompra";


export interface Compra {
    id: number;
    usuarioId: number; 
    itens: ItemCompra[];
    formaPagamento: formaPGTO
    descontoAplicado: number; 
    acrescimoAplicado: number;
    valorTotal: number;
    data: Date;
    parcelas?: number; 
}

export enum formaPGTO{
    PIX = "PIX",
    DEBITO = "DEBITO",
    CREDITO = "CREDITO"
}