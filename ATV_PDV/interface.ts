import readline from "readline";
import { formaPGTO } from "./models/model_compra";
import { createCompra } from "./controler/controler_compra";
import { createUser, listUsers } from "./controler/controler_usuario";
import { createProduct, listProducts } from "./controler/controler_produto";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta: string): Promise<string> {
  return new Promise(resolve => rl.question(pergunta, resolve));
}

export async function interfaceGrafica() {
  console.log(`\nBem-vindo! Escolha uma opção:
1 - Registrar usuário
2 - Registrar produto
3 - Registrar compra
4 - Buscar no banco\n`);

  const opcao = await perguntar("Digite o número da opção: ");

  switch (opcao) {
    case "1":
      const nome = await perguntar("Nome do usuário: ");
      const email = await perguntar("Email: ");
      const senha = await perguntar("Senha: ");
      createUser({nome, email, senha});
      break;

    case "2":
      const nomeProduto = await perguntar("Nome do produto: ");
      const descricao = await perguntar("Descrição: ");
      const preco = parseFloat(await perguntar("Preço: "));
      const estoque = parseInt(await perguntar("Estoque: "));
      createProduct({
        nome: nomeProduto,
        descricao,
        preco,
        estoque,
        criadoEm: new Date()
      });
      break;

    case "3":
      const usuarios = await listUsers();
      console.table(usuarios);

      const usuarioId = parseInt(await perguntar("Digite o ID do usuário que está comprando: "));
      const usuario = usuarios.find(u => u.id === usuarioId);
      if (!usuario) {
        console.log("Usuário não encontrado.");
        break;
      }

      const produtos = await listProducts();
      console.table(produtos);

      const itens: any[] = [];
      let continuar = true;

      while (continuar) {
        const produtoId = parseInt(await perguntar("Digite o ID do produto: "));
        const produto = produtos.find(p => p.id === produtoId);
        if (!produto) {
          console.log("Produto não encontrado.");
          continue;
        }

        const quantidade = parseInt(await perguntar("Quantidade: "));
        const subtotal = produto.preco * quantidade;

        itens.push({ id: 0, produtoId: produto.id, quantidade, precoUnitario: produto.preco, subtotal });

        const mais = await perguntar("Adicionar outro produto? (s/n): ");
        continuar = mais.toLowerCase() === "s";
      }

      const total = itens.reduce((soma, item) => soma + item.subtotal, 0);

      console.log("\nFormas de pagamento:");
      console.log("1 - PIX");
      console.log("2 - DÉBITO");
      console.log("3 - CRÉDITO");

      const forma = await perguntar("Escolha a forma de pagamento: ");
      let formaPagamento;
      switch (forma) {
        case "1": formaPagamento = formaPGTO.PIX; break;
        case "2": formaPagamento = formaPGTO.DEBITO; break;
        case "3": formaPagamento = formaPGTO.CREDITO; break;
        default:
          console.log("Forma de pagamento inválida.");
          break;
      }

      let parcelas = 1;
      if (formaPagamento === formaPGTO.CREDITO) {
        parcelas = parseInt(await perguntar("Número de parcelas: "));
      }

      await createCompra( usuario, { id: 0, usuarioId:usuario.id, itens, formaPagamento, descontoAplicado: 0, acrescimoAplicado: 0, valorTotal: total, data: new Date(), parcelas}, itens
      );

      console.log("Compra registrada com sucesso!");
      break;


    case "4":
      console.log(`\nEscolha uma opção:
1 - Ver usuários
2 - Ver produtos
3 - Voltar\n`);

      const subOpcao = await perguntar("Digite o número da opção: ");

      switch (subOpcao) {
        case "1":
          const usuarios = await listUsers();
          console.table(usuarios);
          break;
        case "2":
          const produtos = await listProducts();
          console.table(produtos);
          break;
        case "3":
          break;
        default:
          console.log("Opção inválida.");
      }
      break;

    default:
      console.log("Opção inválida.");
  }

  rl.close();
}