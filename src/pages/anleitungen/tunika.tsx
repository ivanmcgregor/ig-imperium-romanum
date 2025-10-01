import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import Banner from "@/images/banner.jpg";
import { AnleitungsBild } from "@/components/AnleitungsBild/AnleitungsBild";
import Tunika from "@/images/anleitungen/nicos_tunic.jpg";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Tunika",
  description: "Hintergrundinformationen und Nähanleitung für die Tunika",
};

const tunika = () => (
  <>
    <Head>
      <title>IG Romanum - Anleitung Tunika</title>
      <meta
        name="description"
        content="Hintergrundinformationen und Nähanleitung für die römische Tunika."
      />
      <meta
        name="keywords"
        content="Tunika, Römer, Reenactment, Kleidung, IG Romanum, Anleitung, Nähen, Ausrüstung"
      />
      <meta name="author" content="IG Romanum" />
      <meta property="og:title" content="IG Romanum - Anleitung Tunika" />
      <meta
        property="og:description"
        content="Hintergrundinformationen und Nähanleitung für die römische Tunika."
      />
      <meta property="og:image" content="/images/banner.jpg" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="IG Romanum - Anleitung Tunika" />
      <meta
        name="twitter:description"
        content="Hintergrundinformationen und Nähanleitung für die römische Tunika."
      />
      <meta name="twitter:image" content="/images/banner.jpg" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.ig-romanum.de/anleitungen/tunika" />
    </Head>
    <PageIntro img={Banner}>
      <h2 className="mb-5">Die Tunika</h2>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Die Tunika ist das klassische Gewand zu der Zeit. Weitere Infos z.B.
            auf{" "}
            <a
              target="_blank"
              href="http://www.die-roemer-online.de/militaer/ausruestung/tunica.html"
            >
              die Römer Online
            </a>
            . Allgemeinhin galt es als unhöflich, seine Tunika ohne Gürtel zu
            tragen. Anscheinend war es eine Bestrafung für Soldaten, wenn sie
            ihren Wachdienst ohne ihren Gürtel verrichten mussten.
          </p>
          <p>
            Da eine Tunika sehr einfach selbst zu nähen ist, haben wir hierfür
            gleich mehrere Anleitungen. Das lohnt sich besonders, denn es ist
            generell sinnvoll, mehr als eine Tunika zu haben. So hat man eine
            Ersatztunika, die man verwenden kann, wenn die eine dreckig ist.
            Außerdem weiß man, dass es üblich war, mehrere Tuniken übereinander
            zu ziehen, insbesondere da Leinen deutlich angenehmer auf der Haut
            ist als Wolle.
          </p>
          <p>
            Gerade bei Darstellungen im Frühling und Winter ist eine wollene
            Tunika sehr sinnvoll. Gerade nördlich der Alpen ist auch davon aus
            zu gehen, dass in der kalten Jahreszeit auch langärmlige Tunika
            getragen wurden.
          </p>
          <p>
            Es gibt Diskussion darüber, wie weit und entsprechend Falten werfend
            Tuniken wirklich waren. Da die meisten Darstellungen in Stein
            gehauen sind, ist es durchaus denkbar, dass die Steinmetze mit immer
            atemberaubenderen Darstellungen von wallendem Stoff ihre Finesse
            unter beweis stellen wollten. Eine insbesondere im Schritt weite
            Tunika erlaubt aber natürlich bessere Bewegungsfreiheit.
          </p>
        </div>
      </div>
    </PageIntro>

    <Section title="Anfertigen von Tuniken">
      <h3 className="h4 mt-4">1. Variante</h3>
      <AnleitungsBild src={Tunika} alt="Nicos Anleitung für Tuniken" />

      <h3 className="h4 mt-4">2. Variante</h3>
      <p>
        Man kann eine Tunika mit weniger Nähaufwand erstellen, wenn man ein
        langes Stück Leinen nimmt, was wie ein Poncho zusammen gelegt wird. Der
        Stoff muss dabei so lang sein, dass er zwei Mal die Distanz von den
        Schultern zum Knie (plus Puffer) hat. Die Ärmel sind dabei Teil vom
        Stoff, sodass man die Form eines Plus erhält. So muss man nur die Ärmel
        unten und den Korpus an der Seite zu nähen, die Ärmel und den Bund unten
        umnähen und einen Schlitz (größer 30cm) oben als Ausschnitt schneiden
        und versäumen.
      </p>
    </Section>
  </>
);

export default tunika;
