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





