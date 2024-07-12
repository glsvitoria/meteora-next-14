import { categorias } from "@/mocks/categorias";
import { produtos } from "@/mocks/produtos";

export function getTodosProdutos() {
  return produtos;
}

export function getProdutoPorSlug(slug: string) {
  // Encontra o produto pelo slug (neste caso, o ID).
  const produto = produtos.find((p) => p.id.toString() === slug);
  return produto;
}

export function getCategorias() {
  return categorias;
}
