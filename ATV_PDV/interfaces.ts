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

// Representa um item dentro de uma compra (produto + quantidade)
export interface ItemCompra {
    id: number;
    produtoId: number;
    quantidade: number;
    precoUnitario: number; // preço no momento da venda
    subtotal: number;      // quantidade * precoUnitario
}

// Representa a compra/venda realizada
export interface Compra {
    id: number;
    usuarioId: number; // quem realizou a venda
    itens: ItemCompra[];
    formaPagamento: "PIX" | "DEBITO" | "CREDITO";
    descontoAplicado: number; // em percentual ou valor
    acrescimoAplicado: number;
    valorTotal: number;
    data: Date;
    parcelas?: number; // se for crédito
}