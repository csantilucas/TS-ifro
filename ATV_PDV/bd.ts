import sqlite3 from "sqlite3";
import { open } from "sqlite"
import { ItemCompra} from "./models";

export const dbPromise = open({
  filename: "dataBase.sqlite",
  driver: sqlite3.Database
})

export async function initDB() {
  const db = await dbPromise;

  try {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL
      );
  
      CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        descricao TEXT,
        preco REAL NOT NULL,
        estoque INTEGER NOT NULL,
        criadoEm TEXT NOT NULL
      );
  
      CREATE TABLE IF NOT EXISTS compras (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuarioId INTEGER NOT NULL,
        formaPagamento TEXT NOT NULL,
        descontoAplicado REAL,
        acrescimoAplicado REAL,
        valorTotal REAL NOT NULL,
        data TEXT NOT NULL,
        parcelas INTEGER,
        FOREIGN KEY(usuarioId) REFERENCES usuarios(id) ON DELETE CASCADE
      );
  
      CREATE TABLE IF NOT EXISTS itensCompra (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        compraId INTEGER NOT NULL,
        produtoId INTEGER NOT NULL,
        quantidade INTEGER NOT NULL,
        precoUnitario REAL NOT NULL,
        subtotal REAL NOT NULL,
        FOREIGN KEY(compraId) REFERENCES compras(id),
        FOREIGN KEY(produtoId) REFERENCES produtos(id)
      );
    `);
  } catch (error) {
    console.error("Erro ao inicializar o banco de dados:", error);
  }
}


export async function getDB() {
  return dbPromise;
}

export async function closeDB() {
  const db = await dbPromise;
  await db.close();
}

export async function insertUserDB(nome: string, email: string, senha: string) {
  const db = await getDB();
  try {
    await db.run(
      `insert into usuarios (nome, email, senha) values (?,?,?)`,
      nome, email, senha
    )
    console.log("Usuário inserido com sucesso!")
  } catch (erro) { console.error("Erro ao inserir usuário:", erro); };
}

export async function insertProductDB(nome: string, descricao: string, preco: number, estoque: number) {
  const db = await getDB();
  try {
    await db.run(
      `insert into produtos (nome, descricao, preco, estoque, criadoEm) values (?,?,?,?,?)`,
      nome, descricao, preco, estoque, new Date().toISOString()
    )
    console.log("Produto inserido com sucesso!")
  }
  catch (error) {
    console.error("Erro ao inserir produto:", error);
  }
}

export async function insertItemCompraDB(compraId: number, produtoId: number, quantidade: number, precoUnitario: number, subtotal: number) {
  const db = await getDB();
  try {
    await db.run(
      `insert into itensCompra (compraId, produtoId, quantidade, precoUnitario, subtotal) values (?,?,?,?,?)`,
      compraId, produtoId, quantidade, precoUnitario, subtotal
    )
    console.log("Item de compra inserido com sucesso!")
  } catch (error) {
    console.error("Erro ao inserir item de compra:", error);
  }
}


export async function insertCompraDB( usuarioId: number, itens: ItemCompra[], formaPagamento: "PIX" | "DEBITO" | "CREDITO", descontoAplicado: number, acrescimoAplicado: number, valorTotal: number, parcelas?: number){
  const db = await getDB();
  try {
    const compra = await db.run(
      `INSERT INTO compras (usuarioId, formaPagamento, descontoAplicado, acrescimoAplicado, valorTotal, data, parcelas)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      usuarioId, formaPagamento, descontoAplicado, acrescimoAplicado, valorTotal, new Date().toISOString(), parcelas
    );

    const compraId = compra.lastID ?? null;
    if (compraId === null) {
      throw new Error("Falha ao obter ID da compra.");
    }

    for (const item of itens) {
      await insertItemCompraDB( compraId, item.produtoId, item.quantidade, item.precoUnitario, item.subtotal );
    }
    console.log("Compra inserida com sucesso!");
    return compraId;
  } catch (error) {
    console.error("Erro ao inserir compra:", error);
    return null;
  }
}



export async function getProdutosDB() {
  const db = await getDB();
  const produtos = await db.all(`select * from produtos`);
  return produtos;
}

export async function getUsersDB() {
  const db = await getDB();
  const usuarios = await db.all(`select * from usuarios`);
  return usuarios;
}

export async function getUsuariosComprasDB(usuarioId: number) {
  const db = await getDB();
  try {
    const result = await db.all(
      ` select u.nome as cliente, c.id as compraID, c.valorTotal from compras as c inner join usuarios as u on c.usuarioId = u.id where u.id = ?`,
      usuarioId)
    return result;
  }
  catch (error) { console.error("Erro ao buscar usuários e compras:", error); }
}

export async function updateUser(id: number, nome?: string, email?: string) {
  const db = await getDB();
  const campos: string[] = [];
  const valores: any[] = [];

  if (nome) {
    campos.push("nome = ?");
    valores.push(nome);
  }
  if (email) {
    campos.push("email = ?");
    valores.push(email);
  }
  const query = `UPDATE usuarios SET ${campos.join(", ")} WHERE id = ?`;

  valores.push(id);
  try {
    if (campos.length === 0) {
      console.log("Nenhum campo para atualizar.");
      return;
    }
    await db.run(query, ...valores)
    console.log("Usuário atualizado com sucesso!")
  } catch (erro) { console.error("Erro ao atualizar usuário:", erro); }
}



initDB().then(() => { console.log("Banco de dados inicializado") });


