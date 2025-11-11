import { getUsersDB, insertUserDB } from "../BD/bd";
import { Usuario, UsuarioCreate } from "../models/model_usuario";


export async function createUser(user: UsuarioCreate) {
    return insertUserDB(user.nome, user.email, user.senha);
  }



export async function listUsers(): Promise<Usuario[]> {
    const usuarios = await getUsersDB();
    return usuarios;
}