import Image, { StaticImageData } from "next/image";
import Styles from "./styles.module.css";

interface AnleitungsBildProps {
  src: StaticImageData;
  alt: string;
}

const imgSizes = "(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw";

export const AnleitungsBild = ({ src, alt }: AnleitungsBildProps) => (
  <Image
    src={src}
    className={`mb-2 ${Styles.maxWidth}`}
    alt={alt}
    loading="lazy"
    sizes={imgSizes}
  />
);
