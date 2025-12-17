import { PageIntro } from "@/components/PageIntro/PageIntro";
import Banner from "@/images/banner/banner_termine.jpg";
import { Events } from "@/components/Events/Events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG Romanum - Termine",
  description:
    "Termine und Veranstaltungen bei denen die IG Imperium Romanum ist",
  keywords: [
    "Termine",
    "Veranstaltungen",
    "IG Romanum",
    "Römer",
    "Reenactment",
    "Legionär",
    "Auxiliar",
    "Geschichte",
    "Living History",
  ],
  authors: [{ name: "IG Romanum" }],
  openGraph: {
    title: "IG Romanum - Termine",
    description:
      "Termine und Veranstaltungen bei denen die IG Imperium Romanum ist",
    images: ["/images/banner/banner_termine.jpg"],
    type: "article",
    url: "https://www.ig-romanum.de/termine",
  },
  twitter: {
    card: "summary_large_image",
    title: "IG Romanum - Termine",
    description:
      "Termine und Veranstaltungen bei denen die IG Imperium Romanum ist",
    images: ["/images/banner/banner_termine.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.ig-romanum.de/termine",
  },
};

const Termine = () => (
  <>
    <PageIntro
      img={Banner}
      imgAlt="Römische Legionäre marschieren über einen historischen Markt"
    >
      <h2 className="mb-5">
        Termine und Veranstal
        <span className="d-inline-block d-md-none">
          -<br />
        </span>
        tungen
      </h2>
      <div className="row mb-4">
        <div className="col col-md-10 offset-md-1">
          Hier könnt ihr alle kommenden Termine sehen, bei denen wir entweder in
          vollem Glanz als Besucher, oder als Lagerer mit allem drum und dran zu
          sehen sein werden.
        </div>
      </div>
    </PageIntro>

    <Events />
  </>
);

export default Termine;
