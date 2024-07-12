import { getProdutoPorSlug } from "@/lib/api";

interface IDetalheDoProdutoProps {
  slug: string;
}

export const DetalheDoProduto = async ({ slug }: IDetalheDoProdutoProps) => {
  const produto = await getProdutoPorSlug(slug);

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <section>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>{produto.preco}</p>
    </section>
  );
};
