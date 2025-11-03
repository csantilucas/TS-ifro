import {
    insertCompraDB, insertItemCompraDB, insertProductDB,
    insertUserDB, getProdutosDB, getUsuariosComprasDB, getUsersDB,
    updateUser
} from "./bd";
import { Compra, ItemCompra, Produto, Usuario } from "./models";


export function createUser(usuario: Usuario) {
    insertUserDB(usuario.nome, usuario.email, usuario.senha);
}

export function createProduct(produto: Produto) {
    insertProductDB(produto.nome, produto.descricao || "", produto.preco, produto.estoque);
}

export async function listProducts(): Promise<Produto[]> {
    const produtos = await getProdutosDB();
    return produtos;
}

export async function listUsers(): Promise<Usuario[]> {
    const usuarios = await getUsersDB();
    return usuarios;
}



export async function createCompra(usuarioId: number, itens: { produtoId: number; quantidade: number }[], formaPagamento: "PIX" | "DEBITO" | "CREDITO", parcelas?: number) {

    const itensCompra: ItemCompra[] = [];
    let valorTotal = 0;

    //procura no bd os usuarios e produtos
    const usuarios = await getUsersDB();
    const produtos = await getProdutosDB();
    const usuario = usuarios.find(u => u.id === usuarioId);
    for (const { produtoId, quantidade } of itens) {
        const produto = produtos.find(p => p.id === produtoId);
        const subtotal = produto.preco * quantidade;
        valorTotal += subtotal;

        itensCompra.push({ id: 0, produtoId: produto.id, quantidade, precoUnitario: produto.preco, subtotal });
    }


    let descontoAplicado = 0;
    let acrescimoAplicado = 0;
    const numParcelas = parcelas ?? 0;

    switch (formaPagamento) {
        case "PIX":
            descontoAplicado = 0.05 * valorTotal;
            break;
        case "CREDITO":
            if (numParcelas > 1) {
                acrescimoAplicado = 0.02 * valorTotal * (numParcelas - 1);
            }
            break;
        case "DEBITO":
            // sem alterações
            break;
    }

    const valorFinal = valorTotal - descontoAplicado + acrescimoAplicado;

    await insertCompraDB(usuario.id, itensCompra, formaPagamento, descontoAplicado, acrescimoAplicado, valorFinal, numParcelas);
}
