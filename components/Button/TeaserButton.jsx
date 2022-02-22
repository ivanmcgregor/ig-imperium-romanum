import { Button } from "./Button";
import styles from "./teaserstyles.module.css";
import Link from "next/link";

export const TeaserButton = ({ to, img, children }) => {
  return (
    <div className={`${styles.linkWithImage} pb-4`}>
      <Button to={to}>{children}</Button>
      <Link href={to}>
        <a className={styles.imageContainer}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        </a>
      </Link>
    </div>
  );
};
