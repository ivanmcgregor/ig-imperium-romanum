import Styles from "./teaserstyles.module.css";
import ButtonStyles from "./styles.module.css";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface TeaserButtonProps extends PropsWithChildren {
  to: string;
  img: string;
}
export const TeaserButton = ({ to, img, children }: TeaserButtonProps) => {
  return (
    <Link className={`${Styles.linkWithImage} pb-4`} href={to}>
      <div className={ButtonStyles.button}>{children}</div>
      <div className={Styles.imageContainer}>
        <div
          className={Styles.image}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </Link>

    // <div className={`${styles.linkWithImage} pb-4`}>
    //   <LinkButton to={to}>{children}</LinkButton>
    //   <Link className={styles.imageContainer} href={to}>
    //     <div
    //       className={styles.image}
    //       style={{ backgroundImage: `url('${img}')` }}
    //     ></div>
    //   </Link>
    // </div>
  );
};
