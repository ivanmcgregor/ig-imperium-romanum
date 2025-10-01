import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import Banner from "@/images/banner.jpg";
import Penula from "@/images/anleitungen/nicos_penula.jpg";
import { AnleitungsBild } from "@/components/AnleitungsBild/AnleitungsBild";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Penula und Sagum",
  description: "Anleitung für römische Mäntel (Penula bzw. Sagum)",
};

const penula = () => (
  <>
    <Head>
      <title>IG Romanum - Anleitung Penula und Sagum</title>
      <meta
        name="description"
        content="Anleitung für römische Mäntel (Penula bzw. Sagum)."
      />
      <meta
        name="keywords"
        content="Penula, Sagum, Römer, Reenactment, IG Romanum, Anleitung, Mantel, Umhang, Kleidung"
      />
      <meta name="author" content="IG Romanum" />
      <meta
        property="og:title"
        content="IG Romanum - Anleitung Penula und Sagum"
      />
      <meta
        property="og:description"
        content="Anleitung für römische Mäntel (Penula bzw. Sagum)."
      />
      <meta property="og:image" content="/images/banner.jpg" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="IG Romanum - Anleitung Penula und Sagum"
      />
      <meta
        name="twitter:description"
        content="Anleitung für römische Mäntel (Penula bzw. Sagum)."
      />
      <meta name="twitter:image" content="/images/banner.jpg" />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href="https://www.ig-romanum.de/anleitungen/penula"
      />
    </Head>

    <PageIntro img={Banner}>
      <h2 className="mb-5">Die Penula</h2>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Hier gibt es verschiedene Typen, bei dem der Mantel eine eckige,
            halbkreisförmige, oder runde Grundform hatte. Als Material sollte
            ein dicker gewalkter Wollstoff (z.B. Loden) verwendet werden. Ein
            Mantel war nicht nur im Winter, sondern auch bei schlechtem Wetter
            ein Muss.
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

export default penula;
