import user from "./user";
import { v4 as uuidv4 } from 'uuid';
const users: user[] = [];

function generatePassword(): string {
    return Math.random().toString(36).slice(-8);
}

export function createNewUser(nome: string, email: string, permissions: any) {

    const newUser: user = {
        id: uuidv4(),
        name: nome,
        mail: email,
        senha: generatePassword(),
        dataCreate: new Date(),
        permission: permissions,
    }
    users.push(newUser)
}

export function listUsers() {
    
    users.forEach((users) => {
        let id: string = users.id
        let name: string = users.name
        let permissoesObj = users.permission
        let cargo: string = permissoesObj.cargo
        let Permissoes = Object.keys(permissoesObj).filter(key => permissoesObj[key] === true).join(', ')

        console.log(`ID: ${id}`);
        console.log(`User: ${name}`);
        console.log(`cargo: ${cargo}`)
        console.log(`Permissoes: ${Permissoes}`);


        if (permissoesObj.read && permissoesObj.write && permissoesObj.delete) {
            console.log('o usuario é admin');
        } else if (permissoesObj.read && permissoesObj.write) {
            console.log('o usuario é gerente');
        } else if (permissoesObj.read) {
            console.log('o usuario é um usuario comum');
        } 

        

        // read(permissoesObj)
        // write(permissoesObj)
        // del(permissoesObj)
        console.log('------------------');
        console.log('\n');
    })
}

function permissaosUser() {}

