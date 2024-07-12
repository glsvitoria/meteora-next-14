import Produto from "@/components/Produto";
import { getProdutoPorSlug } from "@/lib/api";

import styles from "./page.module.css";

interface IProdutoPageProps {
  params: {
    slug: string;
  };
}

export default async function ProdutoPage({ params }: IProdutoPageProps) {
  const produto = getProdutoPorSlug(params.slug);

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <main className={styles.main}>
      <Produto produto={produto} />
    </main>
  );
}
