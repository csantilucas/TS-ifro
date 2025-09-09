
let Peso1: number[] = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
let Peso2: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
//console.log(Peso1)


export function primeiroDigito(cnpjArrayVerificado: number[]) {
    let soma: number = 0;//criar um array para guardar os numeros do cnpj
    for (let i = 0; i < cnpjArrayVerificado.length; i++) {
        soma += cnpjArrayVerificado[i] * Peso1[i]//multiplicar cada numero do cnpj pelo peso correspondente
    }

    console.log(`Peso para a soma ${Peso1}`)
    console.log(`resultado da soma ----> ${soma}`)

    let resto: number = soma % 11
    console.log(`Resto da soma dos numeros do CNPJ ----> ${resto}`)

    

    if (resto > 2) {

        let digitoVerificador = 11 - resto
        console.log(`primeiro digito verificador ----> ${digitoVerificador} \n `)
        cnpjArrayVerificado.push(digitoVerificador)//colocaro o digito no array do cnpj na penultima posiçao
        //console.log(cnpjArray)
        return digitoVerificador

    } else {
        let digitoVerificador = 0
        console.log(`primeiro digito verificador ----> ${digitoVerificador} \n `)
        cnpjArrayVerificado.push(digitoVerificador)
        //console.log(cnpjArray)
        return digitoVerificador
    }
}



export function segundoDigito(cnpjArrayVerificado: number[]) {

    let soma: number = 0;//criar um array para guardar os numeros do cnpj
    for (let i = 0; i < cnpjArrayVerificado.length; i++) {
        soma += cnpjArrayVerificado[i] * Peso2[i]//multiplicar cada numero do cnpj pelo peso correspondente

    }

    console.log(`Peso para a soma ${Peso2}`)
    console.log(`resultado da soma ----> ${soma}`)
    let resto: number = soma % 11
    console.log(`Resto da soma dos numeros do CNPJ ----> ${resto}`)

    if (resto > 2) {
        let digitoVerificador = 11 - resto
        console.log(`segundo digito verificador ------> ${digitoVerificador}\n`)
        cnpjArrayVerificado.push(digitoVerificador)//colocar o digito no array do cnpj na ultima posiçao
        return digitoVerificador

    } else {
        let digitoVerificador = 0
        console.log(`segundo digito verificador ------> ${digitoVerificador}\n`)
        cnpjArrayVerificado.push(digitoVerificador)
        return digitoVerificador

    }

}