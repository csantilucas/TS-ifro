import Endereco from "./Endereco"

interface Estudante {
    nome:string,
    dataNascimento:Date,
    pai?:string,
    mae?:string,
    telefone:string,
    Endereco:Endereco,
    Cpf:string,
    Matricula:string
     }
export default Estudante