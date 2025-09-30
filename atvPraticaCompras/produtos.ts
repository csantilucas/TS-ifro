interface produto {
    id:number
    nome:string,
    preco:number,
    quant:number
}

const geladeira:produto={
    id:1,
    nome : 'geladeira',
    preco: 2499.00,
    quant: 9
}

const fogao:produto ={
    id:2,
    nome :'Fogao',
    preco :499.50,
    quant: 12
}

const TV:produto ={
    id:3,
    nome :'Televisao',
    preco :1299.40,
    quant:20
}


interface carrinho{
    produto:produto,
    quantidade:number
}

export {produto ,geladeira, fogao, TV, carrinho}