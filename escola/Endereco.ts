import Municipio from "./Municipio.ts";
import TipoLogradouro from "./TipoLogradouro.ts";

interface Endereco {
    tipoLogradouro: TipoLogradouro,
    nomeLogradouro: String,
    numero: String,
    bairro: string,
    complemento?: string,
    municipo: Municipio
}


export default Endereco