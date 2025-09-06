export function read(permissao) {
    if (permissao.read == true) {
        console.log('pode executar leitura');
    } else {
        console.log('read: sem permissao');
    }
}
export function write(permissao) {
    if (permissao.write == true) {
        console.log('pode executar escrita');
    } else {
        console.log('write :sem permissao');
    }
}
export function del(permissao) {
    if (permissao.delete) {
        console.log('pode executar delete');
    } else {
        console.log('delete: sem permissao');
    }
}