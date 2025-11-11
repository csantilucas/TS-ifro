export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string; 
}

export type UsuarioCreate = Omit<Usuario, "id">;
