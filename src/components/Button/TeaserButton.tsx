import { LinkButton } from "./LinkButton";
import styles from "./teaserstyles.module.css";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface TeaserButtonProps extends PropsWithChildren {
  to: string;
  img: string;
}
export const TeaserButton = ({ to, img, children }: TeaserButtonProps) => {
  return (
    <div className={`${styles.linkWithImage} pb-4`}>
      <LinkButton to={to}>{children}</LinkButton>
      <Link className={styles.imageContainer} href={to}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
      </Link>
    </div>
  );
};
