import Papel from "./Papel";
import Permissao from "./Permissoes";

interface usuario{
    id: string,
    nome:string,
    email:string,
    senha:string,
    dataCriacao: Date,
    papel: Papel,
    permissoes: Permissao[]
}

export default usuario