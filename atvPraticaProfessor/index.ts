import Papel from "./Papel";
import Permissao from "./Permissoes";
import { listarUsuario, novoUsuario } from "./usuarioController";

novoUsuario('santi', 'email.gmail.com', '1234', Papel.ADMINISTRADOR,[Permissao.LEITURA, Permissao.ESCRITA, Permissao.EXCLUSAO])
novoUsuario('ana', 'ana.gmail.com', '4321', Papel.GERENTE,[Permissao.LEITURA, Permissao.ESCRITA])

console.table(listarUsuario())
