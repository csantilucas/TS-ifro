import Municipio from "./Municipio";
import tipoLogradouro from "./TipoLogradouro";

interface Endereco {
    tipoLogradouro: tipoLogradouro,
    nomeLogradouro: String,
    numero: String,
    bairro: string,
    complemento?: string,
    municipo: Municipio
}


export default Endereco