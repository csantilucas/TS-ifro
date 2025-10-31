import sqlite3 from "sqlite3";
import { open } from "sqlite"

export const dbPromise = open({
    filename: "dataBase.sqlite",
    driver: sqlite3.Database
})

export async function initDB() {
    const db = await dbPromise;
  
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
        FOREIGN KEY(usuarioId) REFERENCES usuarios(id)
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
  }