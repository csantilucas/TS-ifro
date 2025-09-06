import Cargo from "./cargo"

interface permission{
    cargo:Cargo
    read:boolean,
    write:boolean,
    delete:boolean
}

export default permission


