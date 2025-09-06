import Cargo from "./cargo";
import permission from "./permissao";

let admPermission:permission={
    cargo: Cargo.ADM,
    read:true,
    write:true,
    delete:true
}

let managerPermission:permission={
    cargo:Cargo.GRT,
    read:true,
    write:true,
    delete:false
}

let userPermission:permission={
    cargo:Cargo.USER,
    read:true,
    write:false,
    delete:false
}


export { admPermission , userPermission, managerPermission };