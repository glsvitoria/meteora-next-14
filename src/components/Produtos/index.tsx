"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { IProduct } from "@/types";

import styles from "./produtos.module.css";

interface IProdutosProps {
  produtos: IProduct[];
}

export const Produtos = ({ produtos }: IProdutosProps) => {
  const router = useRouter();

  if (!produtos) {
    return <div>Carregando produtos...</div>;
  }

  return (
    <section className={styles.produtos}>
      <h2>Produtos que estão bombando!</h2>
      <div className={styles.container}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <figure>
              <Image
                width={350}
                height={422}
                src={produto.imageSrc}
                alt={produto.nome}
                style={{
                  objectFit: "cover",
                }}
                className={styles.imagem}
              />
            </figure>
            <section className={styles.info}>
              <p className={styles.titulo}>{produto.nome}</p>
              <div className={styles.descricao}>{produto.descricao}</div>
              <div className={styles.preco}>{produto.preco}</div>
              <button
                className={styles.botao}
                onClick={() => router.push(`/produto/${produto.id}`)}
              >
                Ver mais
              </button>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
};
