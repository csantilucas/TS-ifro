import Endereco from "./Endereco"
import Estados from "./Estados"
import Estudante from "./Estudante"
import Municipio from "./Municipio"
import TipoLogradouro from "./TipoLogradouro"

let m1: Municipio = {
    nome: 'Vilhena',
    uf: Estados.RO
}


const end1: Endereco = {

    tipoLogradouro: TipoLogradouro.ALAMEDA,
    nomeLogradouro: 'dos anjos',
    numero: '1545',
    bairro: 'Centro',
    municipo: m1

}


const pes1: Estudante = {
    nome:'paulo',
    dataNascimento: new Date ('2004-5-15'),
    //pai:'Augusto',
    mae:'Fernanda',
    telefone:'(69)9 0000-1111',
    Endereco: end1,
    Cpf:'000,000,000-01',
    Matricula:'00000-1'
}
console.log(pes1)

