import type { GalleryType } from "@/data/galerien";
import Styles from "./styles.module.scss";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

export const GalleryImages = ({ folder, fotos }: GalleryType) => {
  const preppedFotos = fotos.map((foto) => `/Galerien/${folder}/${foto}`);

  return (
    <Gallery>
      <div className={`container ${Styles.images}`}>
        {preppedFotos.map((url) => (
          <Item
            key={url}
            original={url}
            content={
              <div
                style={{ backgroundImage: `url(${url})` }}
                className={Styles.galleryImage}
              />
            }
          >
            {({ ref, open }) => (
              <div
                className={Styles.image}
                // @ts-expect-error
                ref={ref}
                onClick={open}
              >
                <div
                  className={Styles.bgImage}
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
              </div>
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};
