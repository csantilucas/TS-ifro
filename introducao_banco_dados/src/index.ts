import { dbPromise, initDB } from "./db";


await initDB()

interface Usuario {
    nome: string,
    email: string,
    rua: string,
    bairro: string,
    numero: string
}

const u1: Usuario = { nome: "marco", email: "user123312@email.com", rua: "flores", bairro: "jardins", numero: "15" }
const u2: Usuario = { nome: "pedro", email: "user4213@email.com", rua: "flores", bairro: "jardins", numero: "15" }


async function addUser(usuario: Usuario) {
    const db = await dbPromise;

    const endereco = await db.run(
        'INSERT INTO endereco (rua, bairro, numero) VALUES (?, ?, ?)',
        usuario.rua,
        usuario.bairro,
        usuario.numero
    ); 
    const enderecoId = endereco.lastID;

    const resultadoUsuario = await db.run(

        'INSERT INTO usuarios (nome, email, endereco) values (?,?,?)',
        usuario.nome,
        usuario.email,
        enderecoId


    )
    return resultadoUsuario
}

async function listar() {
    const db = await dbPromise
    const usuarios = await db.all<Usuario[]>(`
        SELECT u.nome, u.email, e.rua, e.bairro, e.numero 
        FROM usuarios u
        JOIN endereco e ON u.endereco_fk = e.id
    `);
    
    return usuarios;

}

await addUser(u1)
await addUser(u2)

console.table(await listar())