import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import Banner from "@/images/banner.jpg";
import Focale from "@/images/anleitungen/nicos_focale.jpg";
import { AnleitungsBild } from "@/components/AnleitungsBild/AnleitungsBild";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Focale",
};

const focale = () => (
  <>
    <Head>
      <title>IG Romanum - Anleitung Focale</title>
      <meta
        name="description"
        content="Anleitung für die römische Focale (Halstuch)."
      />
      <meta
        name="keywords"
        content="Focale, Halstuch, Römer, Reenactment, IG Romanum, Anleitung, Kleidung, Ausrüstung"
      />
      <meta name="author" content="IG Romanum" />
      <meta property="og:title" content="IG Romanum - Anleitung Focale" />
      <meta
        property="og:description"
        content="Anleitung für die römische Focale (Halstuch)."
      />
      <meta property="og:image" content="/images/banner.jpg" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="IG Romanum - Anleitung Focale" />
      <meta
        name="twitter:description"
        content="Anleitung für die römische Focale (Halstuch)."
      />
      <meta name="twitter:image" content="/images/banner.jpg" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.ig-romanum.de/anleitungen/focale" />
    </Head>
    <PageIntro img={Banner}>
      <h2 className="mb-5">Die Focale</h2>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Dieser Schal dient in erster Linie dem Schutz des Trägers,
            insbesondere gegen das Scheuern der eigenen Rüstung. Jedoch kann es
            auch beispielsweise als Wundverband verwendet werde. Insgesamt ist
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

export default focale;
