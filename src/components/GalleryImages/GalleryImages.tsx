"use client";

import type { GalleryType } from "@/data/galerien";
import { galleryImageBgValue } from "@/utils/galleryImageUrl";
import Styles from "./styles.module.scss";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

export const GalleryImages = ({ folder, fotos }: GalleryType) => {
  const preppedFotos = fotos.map((foto) =>
    galleryImageBgValue(`/Galerien/${folder}/${foto}`),
  );

  return (
    <Gallery>
      <div className={`container ${Styles.images}`}>
        {preppedFotos.map((url) => (
          <Item
            key={url}
            original={url}
            content={
              <div
                style={{ backgroundImage: url }}
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
                {/* show image names by commenting in the line below (will only be shown during development!) */}
                {process.env.NODE_ENV === "development"
                  ? url.split("/")[3]
                  : null}
                <div
                  className={Styles.bgImage}
                  style={{ backgroundImage: url }}
                ></div>
              </div>
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};
