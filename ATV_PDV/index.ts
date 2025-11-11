import { createCompra } from "./controler/controler_compra";
import { createUser, listUsers } from "./controler/controler_usuario";
import { createProduct, listProducts } from "./controler/controler_produto";
import { formaPGTO } from "./models/model_compra";


import { interfaceGrafica } from "./interface";



//createUser({nome: "Alice Silva", email: "alice@email.com", senha: "senha123" });
// createUser({ id: 2, nome: "Bruno Costa", email: "bruno@email.com", senha: "senha456" });
// createUser({ id: 3, nome: "Carla Mendes", email: "carla@email.com", senha: "senha789" });

// createProduct({ id: 1, nome: "Notebook Dell", descricao: "Intel i7, 16GB RAM", preco: 4500, estoque: 10, criadoEm: new Date() });
// createProduct({ id: 2, nome: "Smartphone Samsung", descricao: "Galaxy S22", preco: 3200, estoque: 15, criadoEm: new Date() });
// createProduct({ id: 3, nome: "Fone Bluetooth", descricao: "Noise Cancelling", preco: 600, estoque: 25, criadoEm: new Date() });


// await createCompra(
//   //usuario
//   {
//     id: 1,
//     nome: "Alice Silva",
//     email: "alice@email.com",
//     senha: "senha123"
//   },

//   //compra
//   {
//     id: 0,
//     usuarioId: 1,
//     itens: [
//       {
//         id: 0,
//         produtoId: 2,
//         quantidade: 1,
//         precoUnitario: 3200,
//         subtotal: 3200
//       },
//       {
//         id: 0,
//         produtoId: 3,
//         quantidade: 2,
//         precoUnitario: 600,
//         subtotal: 1200
//       }
//     ],
//     formaPagamento: formaPGTO.CREDITO,
//     descontoAplicado: 0,
//     acrescimoAplicado: 0,
//     valorTotal: 4400,
//     data: new Date(),
//     parcelas: 3
//   },

//   //itens venda
//   [
//     {
//       id: 0,
//       produtoId: 2,
//       quantidade: 1,
//       precoUnitario: 3200,
//       subtotal: 3200
//     },
//     {
//       id: 0,
//       produtoId: 3,
//       quantidade: 2,
//       precoUnitario: 600,
//       subtotal: 1200
//     }
//   ]
// );


// listProducts().then(produtos => {
//   console.log("Produtos no sistema:");
//   console.table(produtos);
// });

// listUsers().then(usuarios => {
//   console.log("Usuários no sistema:");
//   console.table(usuarios);
// });



interfaceGrafica();





