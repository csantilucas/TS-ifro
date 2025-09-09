let cnpjArray: number[] = []
let cnpjArrayVerificado: number[] = []

function cnpjarray(CNPJ: string) {

    if (CNPJ.length === 18 || CNPJ.length === 14) {
        didgitosCnpj(CNPJ)
    } else if(CNPJ.length < 14 || CNPJ.length > 18 || CNPJ === null) {
        console.log(`CNPJ INVÁLIDO, DIGITE UM CNPJ VÁLIDO`)
    }





}


function didgitosCnpj(CNPJ) {

    let cnpjLimpo: string = CNPJ.replace(/[.\/-]/g, "");//metodo replace para retirar os caracteres especiais

    for (let i = 0; i < cnpjLimpo.length - 2; i++) {    //for para percorrer cada caracter da string do cnpj e converter em numero em um array para o calculo sem os digitos verificadores
        const charToNumber = Number(cnpjLimpo.charAt(i))        //converter cada carectere da string do cnpj em numero para o calculo e guardolo em um array
        cnpjArrayVerificado.push(charToNumber)
    }
    for (let i = 0; i < cnpjLimpo.length; i++) {    //for para percorrer cada caracter da string do cnpj e converter em numero em um array
        const charToNumber = Number(cnpjLimpo.charAt(i))        //converter cada carectere da string do cnpj em numero para o calculo e guardolo em um array
        cnpjArray.push(charToNumber)

    }
}

export { cnpjArray, cnpjArrayVerificado, cnpjarray }