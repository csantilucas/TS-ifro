import {writeFile, readFile} from 'fs/promises'


interface usuario{
    nome:string,
    email:string
}

const u1:usuario ={nome:'user1',email:'user@gmail.com'}
const u2:usuario ={nome:'user2',email:'user@gmail.com'}

const users:usuario[] = []

users.push(u1,u2)
async function escrever() {
    await writeFile('leituraescritaDeArquivos/data/usuarios.json',JSON.stringify(users), 'utf-8')
}

async function ler() {
    const resultado = await readFile('leituraescritaDeArquivos/data/usuarios.json', 'utf-8')
    const dados: usuario[] = JSON.parse(resultado)
    console.log(dados)
    
}


escrever()
ler()