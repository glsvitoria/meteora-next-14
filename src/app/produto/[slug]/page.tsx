import Produto from "@/components/Produto";
import { IProduct } from "@/types";

import styles from "./page.module.css";

interface IGetProduto {
  slug: string;
}

interface IGetProdutoResponse {
  produto: IProduct;
}

interface IProdutoPageProps {
  params: {
    slug: string;
  };
}

async function getProduto({ slug }: IGetProduto): Promise<IGetProdutoResponse> {
  const response = await fetch(
    `https://api.npoint.io/671a60b837c11bf3e1f7/produtos`,
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar produto");
  }

  const produtos: IProduct[] = await response.json();

  const produto = produtos.find((produto) => produto.id.toString() === slug);

  if (!produto) {
    throw new Error("Produto não encontrado");
  }

  return { produto };
}

export default async function ProdutoPage({ params }: IProdutoPageProps) {
  const { produto } = await getProduto({ slug: params.slug });

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <main className={styles.main}>
      <Produto produto={produto} />
    </main>
  );
}

export async function generateStaticParams() {
  const response = await fetch(
    "https://api.npoint.io/671a60b837c11bf3e1f7/produtos",
  );

  const produtos = await response.json();

  return produtos.map((produto: IProduct) => ({
    slug: produto.id.toString(),
  }));
}
