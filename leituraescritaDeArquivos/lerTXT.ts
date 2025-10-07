import { writeFile, readFile } from 'fs/promises'

let mensagens: string = 'novos dados do arquivo'

async function escrever() {
    await writeFile('leituraescritaDeArquivos/data/mensagens.txt', mensagens, 'utf-8')
}

async function ler() {
    const resposta = await readFile('data/mensagens.txt', 'utf-8')
    console.log(resposta)
}




escrever()
ler()


