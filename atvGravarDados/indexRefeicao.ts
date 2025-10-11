import Estudante from "../escola/Estudante";
import { refeicao, TipoRefeicao } from "./refeicao";
import { aluno1, aluno2 } from "./estudantes";

import { writeFile, readFile } from 'fs/promises';
let caminhoDoArquivo: string = 'atvGravarDados/data/refeicao.json'
let arrayRefeicao: refeicao[] = []
function fazerRefeicao(aluno: Estudante, TipoRefeicao: TipoRefeicao) {

    const novaRefeicao: refeicao = {
        estudante: aluno,
        tipo: TipoRefeicao,
        data: new Date(),
    }
    console.log(`Refeição (${novaRefeicao.tipo}) registrada para ${novaRefeicao.estudante.nome}.`);
    arrayRefeicao.push(novaRefeicao)
    let dados = JSON.stringify(arrayRefeicao)
    escreverJson(dados)
    lerJson()
}

async function escreverJson(dados) {
    writeFile(caminhoDoArquivo, dados, 'utf-8')
    console.log("arquivo gravado")
}

async function lerJson() {
    const resposta = await readFile('atvGravarDados/data/refeicao.json', 'utf-8')

}


async function gerarRelatorio(inicio: Date, fim: Date) {
    console.log(`\nGerando relatório de ${inicio.toLocaleString()} até ${fim.toLocaleString()}`);
    const dadosDoArquivo = await readFile(caminhoDoArquivo, 'utf-8');
    const todasAsRefeicoes = JSON.parse(dadosDoArquivo);

    const relatorioFiltrado = todasAsRefeicoes.filter(resultado => {
        const dataRefeicao = new Date(resultado.data);
        return dataRefeicao >= inicio && dataRefeicao <= fim;
    });

    console.log("Resultado encontrado");
    if (relatorioFiltrado.length == 0) {
        console.log("Nenhuma refeição encontrada nessa data.");
    } else {
        console.log(JSON.stringify(relatorioFiltrado));
    }


    return relatorioFiltrado;


}



async function exportarRelatorioParaCSV(dadosDoRelatorio: refeicao[]) {


    const linhas = dadosDoRelatorio.map(refeicao =>
        `${refeicao.estudante.nome},${refeicao.tipo},${new Date(refeicao.data).toLocaleString('pt-BR')}`
    ).join('\n');
    await writeFile('atvGravarDados/data/relatorio.csv', linhas, 'utf-8');
    console.log("\nRelatório exportado com sucesso para 'relatorio.csv'");
}

(async () => {
    let inicio = new Date('2025-01-11T01:45:37.514Z')
    let fim = new Date()

    await fazerRefeicao(aluno1, TipoRefeicao.almoco);
    await fazerRefeicao(aluno2, TipoRefeicao.almoco);
    const dadosFiltrados = await gerarRelatorio(inicio, fim);
    await exportarRelatorioParaCSV(dadosFiltrados);

})();
