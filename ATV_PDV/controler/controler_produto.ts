import { getProdutosDB, insertProductDB } from "../BD/bd";
import { Produto } from "../models/model_produto";


export function createProduct(produto: Produto) {
    insertProductDB(produto.nome, produto.descricao || "", produto.preco, produto.estoque);
}

export async function listProducts(): Promise<Produto[]> {
    const produtos = await getProdutosDB();
    return produtos;
}