let CNPJ: string = "11.444.777/0001-95";


let cnpjArray: number[] = []
let calculoCnpj: number[] = [ 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
//console.log(calculoCnpj)

let soma: number = 0;//criar um array para guardar os numeros do cnpj
let soma2: number = 0;//criar um array para guardar os numeros do cnpj
//digitos verificadores
let digito1: number;
let digito2: number;

//função para validar o cnpj

function validaCNPJ(cnpj: string) {

    
    let cnpjLimpo: string = CNPJ.replace(/[.\/-]/g, "");//metodo replace para retirar os caracteres especiais
    


    for (let i = 0; i < cnpjLimpo.length-2; i++) {    //for para percorrer cada caracter da string do cnpj e converter em numero em um array

        const charToNumber = Number(cnpjLimpo.charAt(i))        //converter cada carectere da string do cnpj em numero para o calculo e guardolo em um array

        cnpjArray.push(charToNumber)

        
        
    }
   
    
    for (let i = 0; i < cnpjArray.length; i++) {
        soma+= cnpjArray[i] * calculoCnpj[i]//multiplicar cada numero do cnpj pelo peso correspondente
    }

    console.log(soma);
    let resto = soma%11
    console.log(resto)

    calculoCnpj.unshift(6)//adicionar o peso 6 no inicio do array de pesos para o calculo do segundo digito verificador
    console.log(calculoCnpj)
    if (resto < 11) {
        let digito1 = 11 - resto
        console.log(digito1)
        
        cnpjArray.push(digito1)//colocaro o digito no array do cnpj na penultima posiçao
        console.log(cnpjArray)
    }
    for (let i = 0; i < cnpjArray.length; i++) {
        soma2 += cnpjArray[i] * calculoCnpj[i]//multiplicar cada numero do cnpj pelo peso correspondente
    }
    console.log(soma2);



}
validaCNPJ(CNPJ)











