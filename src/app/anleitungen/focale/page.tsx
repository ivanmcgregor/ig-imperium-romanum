import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import Focale from "@/images/anleitungen/nicos_focale.jpg";
import { AnleitungsBild } from "@/components/AnleitungsBild/AnleitungsBild";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Focale",
  description: "Anleitung für die römische Focale (Halstuch).",
  keywords: [
    "Focale",
    "Halstuch",
    "Römer",
    "Reenactment",
    "IG Romanum",
    "Anleitung",
    "Kleidung",
    "Ausrüstung",
  ],
  authors: [{ name: "IG Romanum" }],
  openGraph: {
    title: "IG Romanum - Anleitung Focale",
    description: "Anleitung für die römische Focale (Halstuch).",
    images: ["/images/banner.jpg"],
    type: "article",
    url: "https://www.ig-romanum.de/anleitungen/focale",
  },
  twitter: {
    card: "summary_large_image",
    title: "IG Romanum - Anleitung Focale",
    description: "Anleitung für die römische Focale (Halstuch).",
    images: ["/images/banner.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.ig-romanum.de/anleitungen/focale",
  },
};

const FocalePage = () => (
  <>
    <PageIntro
      img={`/AnleitungsBilder/focale.jpg`}
      imgAlt="Zeichnerische Darstellung einer römischen Focale"
    >
      <h2 className="mb-5">Die Focale</h2>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Dieser Schal dient in erster Linie dem Schutz des Trägers,
            insbesondere gegen das Scheuern der eigenen Rüstung. Jedoch kann es
            auch beispielsweise als Wundverband verwendet werden. Insgesamt ist
            die Focale auch ein Erkennungsmerkmal eines Soldaten. Es gibt die
            Theorie, dass Soldaten dieses Tuch weiter trugen, bis daraus die
            heutige Kravatte wurde.
          </p>
        </div>
      </div>
    </PageIntro>
    <Section title="Anfertigen von Focale">
      <AnleitungsBild src={Focale} alt="Nicos Anleitung für die Focale" />
    </Section>
  </>
);

export default FocalePage;
