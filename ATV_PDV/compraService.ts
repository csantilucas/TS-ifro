// compraService.ts
import { Compra } from "./interfaces";
import { salvarCompra } from "./compraRepository";

export async function realizarCompra(dados: Omit<Compra, "id" | "data" | "valorTotal">): Promise<Compra> {
  let total = dados.itens.reduce((soma, item) => soma + item.subtotal, 0);

  if (dados.formaPagamento === "PIX") total *= 0.95;
  if (dados.formaPagamento === "DEBITO") total *= 0.97;
  if (dados.formaPagamento === "CREDITO") {
    total *= 1.02;
    if (dados.parcelas && dados.parcelas > 5) {
      throw new Error("Máximo de 5 parcelas permitido");
    }
  }

  const compra: Compra = {
    ...dados,
    id: 0,
    valorTotal: total,
    data: new Date(),
    descontoAplicado: 0,
    acrescimoAplicado: 0,
  };

  return salvarCompra(compra);
}
