export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string; 
}

export interface Produto {
    id: number;
    nome: string;
    descricao?: string;
    preco: number;
    estoque: number;
    criadoEm: Date;
}

export interface ItemCompra {
    id: number;
    produtoId: number;
    quantidade: number;
    precoUnitario: number; 
    subtotal: number;     
}

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

enum formaPGTO{
    PIX = "PIX",
    DEBITO = "DEBITO",
    CREDITO = "CREDITO"
}