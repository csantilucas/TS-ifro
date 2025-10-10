import Endereco from "../escola/Endereco"
import TipoLogradouro from '../escola/TipoLogradouro.ts';
import Estudante from '../escola/Estudante.ts';
import Municipio from "../escola/Municipio.ts";
import Estados from "../escola/Estados.ts";

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


const arrayAlunos: Estudante[] = [
    {
        nome: 'paulo', dataNascimento: new Date('2004-5-15'), pai:'Augusto', mae: 'Fernanda', telefone: '(69)9 0000-1111', Endereco: end1, Cpf: '000,000,000-01', Matricula: '00000-1'
    },
];

export {arrayAlunos}