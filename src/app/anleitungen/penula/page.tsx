import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import Penula from "@/images/anleitungen/nicos_penula.jpg";
import { AnleitungsBild } from "@/components/AnleitungsBild/AnleitungsBild";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Penula und Sagum",
  description: "Anleitung für römische Mäntel (Penula bzw. Sagum)",
  keywords: [
    "Penula",
    "Sagum",
    "Römer",
    "Reenactment",
    "IG Romanum",
    "Anleitung",
    "Mantel",
    "Umhang",
    "Kleidung",
  ],
  authors: [{ name: "IG Romanum" }],
  openGraph: {
    title: "IG Romanum - Anleitung Penula und Sagum",
    description: "Anleitung für römische Mäntel (Penula bzw. Sagum).",
    images: ["/images/banner.jpg"],
    type: "article",
    url: "https://www.ig-romanum.de/anleitungen/penula",
  },
  twitter: {
    card: "summary_large_image",
    title: "IG Romanum - Anleitung Penula und Sagum",
    description: "Anleitung für römische Mäntel (Penula bzw. Sagum).",
    images: ["/images/banner.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.ig-romanum.de/anleitungen/penula",
  },
};

const PenulaPage = () => (
  <>
    <PageIntro
      img={`/AnleitungsBilder/penula.jpg`}
      imgAlt="Zeichnerische Darstellung einer römischen Penula"
    >
      <h2 className="mb-5">Die Penula</h2>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Bei der Penula gibt es verschiedene Typen, bei dem der Mantel eine
            eckige, halbkreisförmige, oder runde Grundform hatte. Als Material
            sollte ein dicker gewalkter Wollstoff (z.B. Loden) verwendet werden.
            Ein Mantel war nicht nur im Winter, sondern auch bei schlechtem
            Wetter ein Muss.
          </p>
        </div>
      </div>
    </PageIntro>
    <Section title="1. Variante">
      <AnleitungsBild src={Penula} alt="Nicos Anleitung für die Penula" />
    </Section>
    <Section title="2. Variante">
      <p>
        Und eine{" "}
        <a target="_blank" href="http://www.romanarmy.net/howto.shtml#sagum">
          alternative Anleitung
        </a>
        . Wir haben Stoff von 140cm auf 300cm als Basis genommen, den Halbkreis
        ausgeschnitten und aus den Reststücken jeweils ein Quadrat, welches
        zusammengenäht die Kapuze ergibt.
      </p>
    </Section>
  </>
);

export default PenulaPage;
