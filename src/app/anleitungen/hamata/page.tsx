import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Hamata",
  description: "Wichtige Hintergrundinformationen zum römischen Kettenhemd",
  keywords: [
    "Hamata",
    "Lorica Hamata",
    "Kettenhemd",
    "Römer",
    "Reenactment",
    "IG Romanum",
    "Anleitung",
    "Ausrüstung",
    "Rüstung",
  ],
  authors: [{ name: "IG Romanum" }],
  openGraph: {
    title: "IG Romanum - Anleitung Hamata",
    description: "Wichtige Hintergrundinformationen zum römischen Kettenhemd",
    images: ["/images/banner.jpg"],
    type: "article",
    url: "https://www.ig-romanum.de/anleitungen/hamata",
  },
  twitter: {
    card: "summary_large_image",
    title: "IG Romanum - Anleitung Hamata",
    description: "Wichtige Hintergrundinformationen zum römischen Kettenhemd",
    images: ["/images/banner.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.ig-romanum.de/anleitungen/hamata",
  },
};

const HamataPage = () => (
  <>
    <PageIntro
      img={`/AnleitungsBilder/hamata.jpg`}
      imgAlt="Zeichnerische Darstellung eines römischen Kettenhemds (Hamata)"
    >
      <h2 className="mb-5">Die Lorica Hamata</h2>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Das römische Kettenhemd war vor der Segmentrüstung und auch danach
            die hauptsächliche Rüstung der Römer. Auch während der Zeit der
            Segmentrüstung wurde das Kettenhemd weiter verwendet. Ähnlich der
            Segmentata gibt es ein besonderes Schutzbedürfnis der Schulterpartie
            mit einer zusätzlichen Schicht Kette (vermutlich insbesondere bei
            der Infanterie). Diese Schulteraufdopplung verschwindet aber im
            Laufe der Zeit.
          </p>
          <p>
            Ein Kettenhemd funktioniert insbesondere mit einer Subarmalis
            (ansonsten besteht ein erhöhtes Risiko von inneren Blutungen und
            Knochenbrüchen) und einem Gürtel (der das Gewicht deutlich
            angenehmer auf Hüfte und Schultern verteilt).
          </p>
          <p>
            Römisches Geflecht besteht typischerweise aus eher kleinen Ringen
            (5-7mm Innendurchmesser, 7-9mm Außendurchmesser). Es gibt aber auch
            Funde noch kleinerer Ringe. Dabei wurde die 4-in-1 Methode
            verwendet. Der innere Ring war dabei ausgestanzt (vergleichbar mit
            einer Unterlegscheibe), die anderen Ringe wurden vernietet. Die
            gestanzten Ringe mussten nicht vernietet werden und dürften somit
            eine Zeitersparnis in der Herstellung bedeutet haben. Außerdem gaben
            sie auch größeren Schutz, da der Ring nicht so leicht aufgesprengt
            werden konnte. Die kleinen Ringe könnten eine direkte Antwort auf
            die damals verwendeten Stichwaffen wie dem Gladius sein.
          </p>
          <p>
            Ein Kettenhemd zu stricken ist sehr zeitaufwändig, bedarf aber
            weniger Werkzeug als für eine Segmentata notwendig sind. Eben dieser
            Zeitaufwand ist auch der Grund, warum vernünftige Kettenhemden oft
            vergleichsweise teuer sind. Es ist aber zwingend von einem nicht
            vernieteten Kettenhemd abzuraten, da man auch so schon genug Ringe
            verliert und es bereits auf den ersten Blick unauthentisch aussieht.
            Aus diesem Grund sollten Kettenhemden entweder Brüniert, vermessingt
            oder aus Stahl sein. Aluminium und verzinkter Stahl sind keine
            authentischen Materialien und direkt als solte zu erkennen.
          </p>
        </div>
      </div>
    </PageIntro>
  </>
);

export default HamataPage;
