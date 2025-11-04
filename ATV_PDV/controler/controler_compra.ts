import { getUsuariosComprasDB, insertCompraDB } from "../BD/bd";
import { Compra } from "../models/model_compra";
import { ItemCompra } from "../models/model_itemCompra";
import { Usuario } from "../models/model_usuario";


export async function createCompra( usuario: Usuario, compra: Compra, itensCompra: ItemCompra[] ) {

  if (!usuario || !compra || !itensCompra || itensCompra.length === 0) {
    console.error("Dados inválidos para criar compra.");
    return;
  }

  let valorTotal = itensCompra.reduce((total, item) => total + item.subtotal, 0);
  let descontoAplicado = 0;
  let acrescimoAplicado = 0;
  const parcelas = compra.parcelas ?? 0;


  switch (compra.formaPagamento) {
    case "PIX":
      descontoAplicado = 0.05 * valorTotal;
      break;
    case "CREDITO":
      if (parcelas > 1) {
        acrescimoAplicado = 0.02 * valorTotal * (parcelas - 1);
      }
      break;
    case "DEBITO":
      break;
  }

  const valorFinal = valorTotal - descontoAplicado + acrescimoAplicado;
  await insertCompraDB( usuario.id, itensCompra, compra.formaPagamento, descontoAplicado, acrescimoAplicado, valorFinal, parcelas );
}

export async function listcompra(id:number){
  const compras = await getUsuariosComprasDB(id);
  return compras;
}
