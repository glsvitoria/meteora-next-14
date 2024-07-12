import React from "react";

import { SvgIconName } from "@/types";

import SVGIcon from "../SVGIcons";
import styles from "./footer.module.css";

interface IFooterItemProps {
  iconName: SvgIconName;
  title: string;
  description: string;
}

const FooterItem = ({ iconName, title, description }: IFooterItemProps) => (
  <div className={styles.footerItem}>
    <div style={{ width: "72px", height: "72px" }}>
      <SVGIcon iconName={iconName} fill="#000" width="72" height="72" />
    </div>
    <div className={styles.footerDescriptionWrapper}>
      <h3 className={styles.footerTitle}>{title}</h3>
      <p className={styles.footerDescription}>{description}</p>
    </div>
  </div>
);

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <h3 className={styles.footerHead}>Conheça todas as nossas facilidades</h3>
      <div className={styles.footerInner}>
        <FooterItem
          iconName={SvgIconName.Diamond}
          title="PAGUE PELO PIX"
          description="Ganhe 5% OFF em pagamentos via PIX"
        />
        <FooterItem
          iconName={SvgIconName.Repeat}
          title="TROCA GRÁTIS"
          description="Fique livre para trocar em até 30 dias."
        />
        <FooterItem
          iconName={SvgIconName.Flower}
          title="SUSTENTABILIDADE"
          description="Moda responsável, que respeita o meio ambiente."
        />
      </div>
    </section>
  );
};
