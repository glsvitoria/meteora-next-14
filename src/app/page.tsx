import { Categorias } from "@/components/Categorias";
import { Produtos } from "@/components/Produtos";
import { ICategory, IProduct } from "@/types";

import styles from "./page.module.css";

interface IFetchProdutosApiResponse {
  produtos: IProduct[];
}

async function fetchProdutosApi(): Promise<IFetchProdutosApiResponse> {
  const response = await fetch("https://api.npoint.io/671a60b837c11bf3e1f7");

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  const produtos = await response.json();

  return produtos;
}
interface IFetchCategoriasApiResponse {
  categorias: ICategory[];
}

async function fetchCategoriasApi(): Promise<IFetchCategoriasApiResponse> {
  const response = await fetch("https://api.npoint.io/c8214ee77f3b47997641");

  if (!response.ok) {
    throw new Error("Erro ao buscar categorias");
  }

  const categorias = await response.json();

  return categorias;
}

export default async function Home() {
  const { produtos } = await fetchProdutosApi();
  const { categorias } = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
