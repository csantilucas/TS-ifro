import { cnpjArray, cnpjarray, cnpjArrayVerificado } from "./cnpj";
import { primeiroDigito, segundoDigito } from "./verificaDigitos";
import { retornaEstado } from "./verificarEstado";

let valido: boolean = false
//npm run dev
let CNPJ: string = "84.615.491/0001-75";

/*
 uasar o console para digitar
é preciso usar o comando tsx para executar essa seccao do codigo
npx tsx watch atvPraticaCNPJ/index.ts 
---- bloco de codigo  comentado a baixo -----
*/

/*
import promptSync from "prompt-sync";
const prompt = promptSync()
let CNPJ: string = prompt("Digite um CNPJ para ser validado (com ou sem caracteres especiais) -> ");

*/



//função para validar o cnpj

function validaCNPJ(CNPJ: string) {
    //arrays para guardar os numeros do cnpj e o cnpj com os digitos verificadores
    cnpjArray
    cnpjArrayVerificado
    
    cnpjarray(CNPJ)
    //primeiro digito verificador
    primeiroDigito(cnpjArrayVerificado)
    //segundo digito verificador
    segundoDigito(cnpjArrayVerificado)

    //console.log(cnpjArray.toString())
    //console.log(cnpjArrayVerificado.toString())
    //verifica se o cnpj é valido ou não comparando os arrays
    if (cnpjArray.toString() === cnpjArrayVerificado.toString()) {
        console.log(`CNPJ VÁLIDO\n`)
        valido=true
        retornaEstado(CNPJ)
      
    
    } else {
        console.log(`CNPJ INVÁLIDO\n`)
        valido!
    }
    
}
validaCNPJ(CNPJ)










