import { writeFile, readFile } from 'fs/promises'; // Adicionado 'readFile'
import { stringify } from 'csv-stringify/sync';
import { parse } from 'csv-parse/sync'; // Adicionada a importação do 'parse'
import { arrayAlunos } from './estudantes';
import Estudante from '../escola/Estudante';


let caminhoDoArquivo: string = './atvGravarDados/data/test.csv'

// Função de escrita (original, sem alterações)
async function escreverEmCSV(caminhoDoArquivo: string, dados: Estudante[]) {
    try {
        console.log('Iniciando a escrita do arquivo CSV...');
        const stringJSON = JSON.stringify(dados, null, 2);
        
        await writeFile(caminhoDoArquivo, stringJSON);
        console.log(`Arquivo "${caminhoDoArquivo}" escrito com sucesso!`);
    } catch (error) {
        console.error("Erro ao escrever o arquivo:", error);
    }
}

// --- FUNÇÃO DE LEITURA ADICIONADA AQUI ---
async function lerCSV(caminhoDoArquivo: string) {
    const conteudoDoArquivo = await readFile(caminhoDoArquivo, 'utf-8');
    console.log(JSON.parse(conteudoDoArquivo))
}


escreverEmCSV(caminhoDoArquivo, arrayAlunos)
lerCSV(caminhoDoArquivo)
