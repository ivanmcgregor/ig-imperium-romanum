import { GalleryType } from "@/data/galerien";

export const convertGallery = (gallery: GalleryType) => ({
  date: gallery.date,
  link: `/galerie/${gallery.link}`,
  title: gallery.title,
  coverUrl: `/Galerien/${gallery.folder}/${gallery.coverFoto}`,
});
