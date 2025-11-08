import Banner from "@/images/banner/banner_galerien.jpg";
import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import { galleries as galleriesRaw } from "@/data/galerien";
import orderBy from "lodash.orderby";
import { LinkImage } from "@/components/LinkImage/LinkImage";
import { Metadata } from "next";
import { convertGallery } from "@/utils/convertGallery";

type Galleries = Array<{
  link: string;
  coverUrl: string;
  title: string;
  date: string;
}>;

interface YearGalleries {
  year: string;
  galleries: Galleries;
}

export const metadata: Metadata = {
  title: "IG Romanum - Bildergalerien",
  description: "Bildergalerien der IG Romanum",
  keywords: ["IG Romanum", "Bildergalerien", "Galerie"],
  authors: [{ name: "IG Imperium Romanum" }],
  abstract: "Bildergalerien der IG Romanum",
  openGraph: {
    title: "IG Romanum - Bildergalerien",
    description: "Bildergalerien der IG Romanum",
    images: ["/images/banner/banner_galerien.jpg"],
    type: "website",
    url: "https://www.ig-romanum.de/galerie",
  },
  twitter: {
    card: "summary_large_image",
    title: "IG Romanum - Bildergalerien",
    description: "Bildergalerien der IG Romanum",
    images: ["/images/banner/banner_galerien.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ig-romanum.de/galerie",
  },
};

function splitGalleries(galleries: Galleries) {
  const sorted = orderBy(galleries, ["date"], ["desc"]);
  const split = sorted.reduce(
    (prev: { [key: string]: YearGalleries }, curr) => {
      const year = curr.date.substring(0, 4);
      if (prev[year]) {
        prev[year].galleries.push(curr);
        return prev;
      }
      return {
        ...prev,
        ...{
          [year]: {
            year,
            galleries: [curr],
          },
        },
      };
    },
    {},
  );

  return orderBy(Object.values(split), ["year"], ["desc"]);
}

const galleries: Galleries = galleriesRaw.map(convertGallery);

const years = splitGalleries(galleries);

const GaleriePage = () => {
  return (
    <>
      <PageIntro
        img={Banner}
        imgAlt="Bild vom Lager als Symbolbild für die vielen Galerien von verschiedenen Lagern und Events"
      >
        <h2 className="mb-5">Galerie</h2>
        <div className="row mb-4">
          <div className="col col-md-10 offset-md-1">
            Hier sind einige Bilder von unseren Aktionen. Von manchen gibt es
            auch Videos, die auf{" "}
            <a href="https://www.youtube.com/channel/UCjS_3WWLf1DhOFzcmril1LA">
              unserem YouTube Kanal
            </a>{" "}
            geschaut werden können.
          </div>
        </div>
      </PageIntro>

      {years.map(({ year, galleries }) => (
        <Section title={year} useAlternateHeadlineFont key={year}>
          <div className="container">
            <div className="row">
              {galleries.map(({ title, link, coverUrl }) => (
                <div className="col-12 col-md-6" key={title}>
                  <LinkImage bgImage={coverUrl} href={link}>
                    {title}
                  </LinkImage>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}
    </>
  );
};

export default GaleriePage;
