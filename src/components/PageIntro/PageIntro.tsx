import Styles from "./styles.module.css";
import { PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import { WebpFallbackImage } from "@/components/WebpFallbackImage/WebpFallbackImage";

interface PageIntroProps extends PropsWithChildren {
  img?: StaticImageData | string;
  imgAlt: string;
  imgBasePath?: string;
  isHome?: boolean;
}
export const PageIntro = ({
  children,
  img,
  imgAlt,
  imgBasePath,
  isHome,
}: PageIntroProps) => {
  const renderImage = () => {
    if (imgBasePath) {
      if (process.env.NODE_ENV === "development") {
        return (
          <WebpFallbackImage
            basePath={imgBasePath}
            alt={imgAlt}
            className={Styles.imgCover}
          />
        );
      }
      return (
        <img
          src={`${imgBasePath}.webp`}
          className={Styles.imgCover}
          alt={imgAlt}
        />
      );
    }
    if (typeof img === "string") {
      return <img src={img} className={Styles.imgCover} alt={imgAlt} />;
    }
    if (img) {
      return <Image src={img} className={Styles.imgCover} alt={imgAlt} />;
    }
    return null;
  };

  return (
    <div
      className={`${Styles.intro} text-center ${!isHome && Styles.introSmall}`}
    >
      <div className={Styles.mosaic}></div>
      <div className={Styles.marble1}>
        <div className={Styles.offsetImage}>
          <div className="container">{renderImage()}</div>
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
