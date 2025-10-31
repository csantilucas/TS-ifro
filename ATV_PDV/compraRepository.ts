// compraRepository.ts
import { dbPromise } from "./bd";
import { Compra } from "./interfaces";

export async function salvarCompra(compra: Compra): Promise<Compra> {
  const db = await dbPromise;

  const result = await db.run(
    `INSERT INTO compras 
      (usuarioId, formaPagamento, descontoAplicado, acrescimoAplicado, valorTotal, data, parcelas) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    compra.usuarioId,
    compra.formaPagamento,
    compra.descontoAplicado,
    compra.acrescimoAplicado,
    compra.valorTotal,
    compra.data.toISOString(),
    compra.parcelas ?? null
  );

  return { ...compra, id: result.lastID! };
}
