import Styles from "./styles.module.css";
import { PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";

interface PageIntroProps extends PropsWithChildren {
  img: StaticImageData | string;
  imgAlt: string;
  isHome?: boolean;
}
export const PageIntro = ({
  children,
  img,
  imgAlt,
  isHome,
}: PageIntroProps) => {
  return (
    <div
      className={`${Styles.intro} text-center ${!isHome && Styles.introSmall}`}
    >
      <div className={Styles.mosaic}></div>
      <div className={Styles.marble1}>
        <div className={Styles.offsetImage}>
          <div className="container">
            {typeof img === "string" ? (
              <img src={img} className={Styles.imgCover} alt={imgAlt} />
            ) : (
              <Image src={img} className={Styles.imgCover} alt={imgAlt} />
            )}
          </div>
        </div>
      </div>
      <div className={Styles.marble2}>
        <div className="container">
          <div className={`borderBox ${Styles.borderBox}`}>{children}</div>
        </div>
      </div>
    </div>
  );
};
