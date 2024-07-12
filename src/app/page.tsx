import { Categorias } from "@/components/Categorias";
import { Produtos } from "@/components/Produtos";
import { getCategorias } from "@/lib/api";
import { IProduct } from "@/types";

import styles from "./page.module.css";

interface IFetchProdutosApiResponse {
  produtos: IProduct[];
}

async function fetchProdutosApi(): Promise<IFetchProdutosApiResponse> {
  const response = await fetch("http://localhost:3000/api/produtos");

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  const produtos = await response.json();

  return produtos;
}

export default async function Home() {
  const { produtos } = await fetchProdutosApi();
  const categorias = getCategorias();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
