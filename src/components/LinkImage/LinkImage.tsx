import Styles from "./styles.module.scss";
import { LinkButton } from "@/components/Button/LinkButton";
import { PropsWithChildren } from "react";
import Link from "next/link";

interface LinkImageProps extends PropsWithChildren {
  bgImage: string;
  href: string;
}

export const LinkImage = ({ bgImage, href, children }: LinkImageProps) => {
  if (!bgImage.includes("url(")) {
    throw new Error("LinkImage must be a valid css url including `url(...`");
  }

  return (
    <div className={`${Styles.linkWithImage} pb-4`}>
      <LinkButton to={href} className={Styles.btn}>
        {children}
      </LinkButton>
      <Link href={href} className={Styles.imageContainer}>
        <div
          className={Styles.image}
          style={{ backgroundImage: bgImage }}
        ></div>
      </Link>
    </div>
  );
};
