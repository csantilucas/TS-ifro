import Estudante from "../escola/Estudante";

export interface refeicao {
    estudante:Estudante,
    tipo:TipoRefeicao,
    data:Date,
}

enum TipoRefeicao {
    lanche = 'lanche',
    almoco = 'almoco',
    jantar = 'jantar',
}


export { TipoRefeicao}