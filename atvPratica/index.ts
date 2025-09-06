import { admPermission, userPermission, managerPermission } from "./criarPermissao";
import { del, read, write } from "./executar";
import user from "./user";


import { v4 as uuidv4 } from 'uuid';



function generatePassword(): string {
    return Math.random().toString(36).slice(-8);
}

const users: user[] = [];

function createNewUser(nome: string, email: string, permissions: any) {

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

function permissionUsers() {
    
    users.forEach((users) => {
        let name: string = users.name
        let permissoesObj = users.permission
        let cargo: string = permissoesObj.cargo


        let Permissoes = Object.keys(permissoesObj).filter(key => permissoesObj[key] === true).join(', ')

        console.log(`User: ${name}`);
        console.log(`cargo: ${cargo}`)
        console.log(`Permissoes: ${Permissoes}`);


        if (permissoesObj.read && permissoesObj.write && permissoesObj.delete) {
            console.log('User is admin');
        } else if (permissoesObj.read && permissoesObj.write) {
            console.log('User is manager');
        } else if (permissoesObj.read) {
            console.log('User is regular user');
        } else {
            console.log('No permissions assigned');
        }

        console.log('\nTestando permissoes:\n');

        read(permissoesObj)
        write(permissoesObj)
        del(permissoesObj)
        console.log('------------------');
    })
}


createNewUser('santi0', 'user@email.com', admPermission)
createNewUser('santi1', 'user@email.com', managerPermission)
createNewUser('santi2', 'user@email.com', userPermission)

console.log(users);
permissionUsers()
