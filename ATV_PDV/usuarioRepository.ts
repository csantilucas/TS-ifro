// usuarioRepository.ts
import { dbPromise } from "./bd";
import { Usuario } from "./interfaces";

export async function criarUsuario(usuario: Omit<Usuario, "id">): Promise<Usuario> {
  const db = await dbPromise;
  const result = await db.run(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    usuario.nome, usuario.email, usuario.senha
  );
  return { id: result.lastID!, ...usuario };
}

export async function listarUsuarios(): Promise<Usuario[]> {
  const db = await dbPromise;
  return db.all<Usuario[]>("SELECT * FROM usuarios");
}
