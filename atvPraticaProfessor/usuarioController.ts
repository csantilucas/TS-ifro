import Papel from "./Papel";
import Permissao from "./Permissoes";
import usuario from "./Usuario";
import { v4 as uuidv4, v4 } from 'uuid';

//Banco de dados em memoria
const user: usuario[] = []

export function novoUsuario(nome:string, email:string, senha:string, papel:Papel, permissoes:Permissao[]){

    const novoUsuario = {
        id: uuidv4(),
        nome:nome,
        email:email,
        senha:senha,
        dataCriacao: new Date(),
        papel:papel,
        permissoes:permissoes
      }

    user.push(novoUsuario)
}


export function listarUsuario(): usuario[]{
    return user;
}