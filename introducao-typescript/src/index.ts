// let nome: string = 'maria'
// let idade:number = 15
// let pagouBoleto: boolean = false

// idade = '15'+ 1
// pagouBoleto = 'sim'
// console.log(idade)




interface  Endereco {
    rua: string,
    num: number,
    bairro: string,
    cep:string
    
}

const end1:Endereco={
    rua:'Joao arrigo',
    num:4751,
    bairro:'Jardim Ameriva',
    cep:'76890-547'
}


interface Pessoa {

    nome: String,
    idade: number,
    sexo: string
    endereco:Endereco
}

const p1: Pessoa = {

    nome: 'Paulo',
    idade:42,
    sexo: 'm',
    endereco:end1
    
}

console.log(p1)

