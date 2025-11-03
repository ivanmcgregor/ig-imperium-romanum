import orderBy from "lodash.orderby";
import { galleries } from "@/data/galerien";

import styles from "./GalleryPreview.module.scss";
import { convertGallery } from "@/utils/convertGallery";
import { LinkButton } from "@/components/Button/LinkButton";

const latestGallery = orderBy(galleries, ["date"], ["desc"])[0];

const { link, title, coverUrl } = convertGallery(latestGallery);

export const GallereyPreview = () => {
  return (
    <div
      className={styles.imgTeaser}
      style={{ backgroundImage: `url(${coverUrl})` }}
    >
      <LinkButton to={link}>Neuste Bildergallerie: {title}</LinkButton>
    </div>
  );
};
