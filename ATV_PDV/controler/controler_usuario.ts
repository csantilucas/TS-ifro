import { getUsersDB, insertUserDB } from "../BD/bd";
import { Usuario } from "../models/model_usuario";


export function createUser(usuario: Usuario) {
    insertUserDB(usuario.nome, usuario.email, usuario.senha);
}



export async function listUsers(): Promise<Usuario[]> {
    const usuarios = await getUsersDB();
    return usuarios;
}