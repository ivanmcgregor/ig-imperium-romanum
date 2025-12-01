import { MetadataRoute } from "next";
import { galleries } from "../data/galerien";

const BASE_URL = "https://ig-romanum.de";

const staticPages = [
  "", // '/',
  "/anleitungen",
  "/anleitungen/cingulum",
  "/anleitungen/feminalia",
  "/anleitungen/focale",
  "/anleitungen/hamata",
  "/anleitungen/penula",
  "/anleitungen/schuhe",
  "/anleitungen/scutum",
  "/anleitungen/segmentata",
  "/anleitungen/subarmalis",
  "/anleitungen/tunika",
  "/anschaffungsratgeber",
  "/datenschutz",
  "/galerie",
  "/kontakt",
  "/links",
  "/mitglieder",
  "/termine",
  "/tipps",
  "/videos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
  }));

  const galerieRoutes = galleries.map((galerie) => ({
    url: `${BASE_URL}/galerie/${galerie.link}`,
  }));

  return [...staticRoutes, ...galerieRoutes];
}
