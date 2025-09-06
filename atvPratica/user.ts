import permission from "./permissao";

interface user{
    id: string
    name: string,
    mail: string,
    senha: string,
    dataCreate: Date,
    permission: permission,
}

export default user;