import { getUsersDB, getUsuariosComprasDB } from "./bd";
import { createCompra, createProduct, createUser, listProducts, listUsers } from "./controler";

createUser({ id: 1, nome: "Alice Silva", email: "alice@email.com", senha: "senha123" });
createUser({ id: 2, nome: "Bruno Costa", email: "bruno@email.com", senha: "senha456" });
createUser({ id: 3, nome: "Carla Mendes", email: "carla@email.com", senha: "senha789" });

createProduct({ id: 1, nome: "Notebook Dell", descricao: "Intel i7, 16GB RAM", preco: 4500, estoque: 10, criadoEm: new Date() });
createProduct({ id: 2, nome: "Smartphone Samsung", descricao: "Galaxy S22", preco: 3200, estoque: 15, criadoEm: new Date() });
createProduct({ id: 3, nome: "Fone Bluetooth", descricao: "Noise Cancelling", preco: 600, estoque: 25, criadoEm: new Date() });



await createCompra(2, [
  { produtoId: 1, quantidade: 1 },
  { produtoId: 3, quantidade: 2 }
], "CREDITO", 3);

await createCompra(1, [{ produtoId: 2, quantidade: 1 }], "PIX");
await createCompra(3, [{ produtoId: 3, quantidade: 1 }], "DEBITO");


listProducts().then(produtos => {
  console.log("Produtos no sistema:");
  console.table(produtos);
}   );

listUsers().then(usuarios => {
  console.log("Usuários no sistema:");
  console.table(usuarios);
}   );



console.log(getUsuariosComprasDB(1))
