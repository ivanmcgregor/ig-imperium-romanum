import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import Banner from "@/images/banner.jpg";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Subarmalis",
  description:
    "Hintergrundinformationen zur Polsterung unter der Rüstung zur Römerzeit",
};

const subarmalis = () => (
  <>
    <Head>
      <title>IG Romanum - Anleitung Subarmalis</title>
      <meta
        name="description"
        content="Hintergrundinformationen zum römischen Polsterwams unter der Rüstung (Subarmalis)."
      />
      <meta
        name="keywords"
        content="Subarmalis, Polsterung, Römer, Rüstung, Lorica Segmentata, Reenactment, IG Romanum, Anleitung, Vorläufer des Gambeson"
      />
      <meta name="author" content="IG Romanum" />
      <meta property="og:title" content="IG Romanum - Anleitung Subarmalis" />
      <meta
        property="og:description"
        content="Hintergrundinformationen zum römischen Polsterwams unter der Rüstung (Subarmalis)."
      />
      <meta property="og:image" content="/images/banner.jpg" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="IG Romanum - Anleitung Subarmalis" />
      <meta
        name="twitter:description"
        content="Hintergrundinformationen zum römischen Polsterwams unter der Rüstung (Subarmalis)."
      />
      <meta name="twitter:image" content="/images/banner.jpg" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.ig-romanum.de/anleitungen/subarmalis" />
    </Head>

    <PageIntro img={Banner}>
      <h2 className="mb-5">Die Subarmalis</h2>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Die Subarmalis ist das römische Gegenstück zum mittelalterlichen
            Gambeson. Hierbei handelt es sich im wesentlichen um einen dicken
            Stoff (oder mehrere Lagen dünnen Stoff), welcher die Wucht von
            Aufschlägen abfedert und verteilt. Dies ist notwendig unter jeder
            Art von Rüstung (lorica), aber absolut unabdingbar unter
            Kettenhemden. Mit der Zeit wurden Pteruges an den Armen und Torso
            angebracht, die vor allem die Kleidung aus Stoff schützten. Darüber
            hinaus könnten sie eine geringe Schutzwirkung gehabt haben. Einige
            Beispiele gibt es beim{" "}
            <a
              target="_blank"
              href="https://romanrecruit.weebly.com/subarmalis.html"
            >
              Roman Recruit
            </a>
            . Die Subarmalis wird im Alltag übrigens oftmals einfach "Sub"
            genannt.
          </p>
        </div>
      </div>
    </PageIntro>

    <Section title="Anfertigen einer Subarmalis">
      <p>
        Da nie eine Subarmalis gefunden oder deren Machart und Herstellung
        beschrieben wurde, nehmen wir uns hier einen gewissen Freiraum. Die Subarmalis
        besteht insbesondere aus einem Korpus, der aus einigen Lagen dicken
        Stoff bestehen kann, der miteinander vernäht ist. Optional kann man dann
        Ptergys anbringen. Zur effektiven Polsterung könnte man mehrere Lagen
        Stoffdecken (z.B. Wolldecken) vernähen.
      </p>
      <p>
        Tipps gibts beispielsweise bei{" "}
        <a target="_blank" href="https://www.larp.com/legioxx/subarm.html">
          Legio XX
        </a>
        . Richtig ist, dass die Polsterung der Schultern das Wichtigste ist. Das
        zeigt sich auch in der Machart der Rüstung (z.B. Schulterdopplung bei der
        Hamata) - der größte Schutzbedarf war auf den Schultern. Dazu kommt, dass
        das Gewicht von oben auf die Schultern drückt und man so das Gewicht
        gleichmäßiger verteilt. Wir bevorzugen dennoch eine dünne Polsterwirkung
        am Torso um die Wucht eines Treffers besser zu verteilen. Dazu kommt,
        dass die Rüstung so nicht direkt auf der Haut liegt und bequemer auf der
        Hüfte sitzen kann. Dies kann allerdings auch durch eine punktuelle
        Polsterung in Form eines umgewickelten Stoffstreifens erreicht werden.
      </p>
    </Section>
  </>
);

export default subarmalis;
