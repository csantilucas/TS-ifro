import { admPermission, managerPermission, userPermission } from "./criarPermissao";
import { createNewUser, listUsers } from "./usuarioController";

createNewUser('santi0', 'user@email.com', admPermission)
createNewUser('santi1', 'user@email.com', managerPermission)
createNewUser('santi2', 'user@email.com', userPermission)


listUsers();