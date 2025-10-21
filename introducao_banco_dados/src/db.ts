import sqlite3 from "sqlite3";
import { open } from "sqlite"

export const dbPromise = open({
    filename: "database.sqlite",
    driver: sqlite3.Database
})


export async function initDB() {
    const db = await dbPromise;
    await db.exec(`

CREATE TABLE IF NOT EXISTS endereco (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 rua  TEXT  NOT NULL, 
 bairro TEXT  NOT NULL,
 numero TEXT NULL
 );


 CREATE TABLE IF NOT EXISTS usuarios (
 id  INTEGER PRIMARY KEY AUTOINCREMENT,
 nome  TEXT  NOT NULL, 
 email TEXT  NOT NULL,
 edereco_fk INT NOT NULL,
 CONSTRAINT ENDERECO_FK FOREIGN KEY (endereco_fk) REFERENCES endereco(id)
 );

 


  `)
}

/*

quando der erro para executar a funcao 

Converta seu projeto para usar ES Modules nativamente.
1. No seu package.json: Adicione esta linha no nível principal:

JSON
"type": "module"


e se ainda nao der certo 
2. No seu tsconfig.json: Ajuste (ou adicione) estas duas opções dentro de "compilerOptions":

JSON
"compilerOptions": {
  // ...outras opções
  "module": "NodeNext",
  "moduleResolution": "NodeNext"
  // ...outras opções
}
*/
