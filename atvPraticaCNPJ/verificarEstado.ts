import { estados } from "./estruturaEstados"

// aqui importa a estrutura e o enum la do estrutura2.ts
export function retornaEstado(cnpj: string) {
    // 1. Busca o estado correspondente ao CNPJ e guarda o resultado.
    const estadoEncontrado = buscarEstado(cnpj)   
    // 2. Verifica se um estado foi encontrado antes de continuar.
    if (estadoEncontrado) {
        return console.log(formatarMensagem(estadoEncontrado, cnpj))
        
    } else{ 
    console.log ('erro ao encontrar o estado')}
}

function formatarMensagem (estadosString: string, cnpj: string): string { 
    const estadosArray = estadosString.split(", ") // Agora funciona, pois `estadosString` é uma string válida.
    return `O CNPJ ${cnpj} foi emitido na região do estado(s) de: ${estadosArray.join(", ")}`
}

function buscarEstado (cnpj: string): estados | undefined { 
    const numeros = cnpj.replace(/\D/g, ""); // remove tudo que não for número
    const prefixo = numeros.charAt(7); // pega os dois primeiros números
    const chave = `x${prefixo}`; // cria a chave para buscar no enum
    return estados[chave as keyof typeof estados]; 
}



