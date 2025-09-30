import { Banco, banco1 } from "./banco"
import { Gerente, Gerente1 } from "./gerente"

export default interface Agencias {
    cidade: string,
    numero: number,
    banco: Banco
    gerente: Gerente
}

const Agencia0001: Agencias = {
    cidade: 'Vilhena',
    numero: 1001,
    banco: banco1,
    gerente: Gerente1
}

const Agencia0002: Agencias = {
    cidade: 'Vilhena',
    numero: 1002,
    banco: banco1,
    gerente: Gerente1
}

const Agencia003: Agencias = {
    cidade: 'Vilhena',
    numero: 1003,
    banco: banco1,
    gerente: Gerente1
}


export { Agencia0001, Agencia003, Agencia0002, Agencias }

