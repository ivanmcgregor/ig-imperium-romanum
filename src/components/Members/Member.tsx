import styles from "./styles.module.css";
import Image from "next/image";
import {Member} from "@/components/Members/types";

export const MemberView = ({ img, name, text, addendum }: Member) => {
  return (
    <>
      <div
        className={`borderBox ${styles.borderBox} d-flex justify-content-center`}
      >
        <h3 className={`mb-0 align-self-center ${styles.headline}`}>{name}</h3>
      </div>
      <div className={styles.spacing}>
        <div className={styles.imgOverflow}>
          <Image className={styles.image} src={img} alt={`Ein Bild von ${name}`} />
        </div>
        <p className="my-3">{text}</p>
        {addendum && (<p className="my-3">{addendum}</p>)}
      </div>
    </>
  );
};
