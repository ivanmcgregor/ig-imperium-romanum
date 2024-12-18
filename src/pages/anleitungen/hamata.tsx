import { PageIntro } from "@/components/PageIntro/PageIntro";
import Banner from "@/images/banner.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Hamata",
  description: "Wichtige Hintergrundinformationen zum römischen Kettenhemd",
};

const hamata = () => (
  <PageIntro img={Banner}>
    <h2 className="mb-5">Die Lorica Hamata</h2>
    <div className="row mb-4">
      <div className="col-md-10 offset-md-1">
        <p>
          Das römische Kettenhemd war vor der Segmentrüstung und auch danach die
          hauptsächliche Rüstung der Römer. Auch während der Zeit der
          Segmentrüstung wurde das Kettenhemd weiter verwendet. Ähnlich der
          Segmentata gibt es ein besonderes Schutzbedürfnis der Schulterpartie
          mit einer zusätzlichen Schicht Kette (vermutlich insbesondere bei der
          Infanterie). Diese Schulteraufdopplung verschwindet aber im Laufe der
          Zeit.
        </p>
        <p>
          Ein Kettenhemd funktioniert insbesondere mit einer Subarmalis
          (ansonsten besteht ein erhöhtes Risiko von inneren Blutungen und
          Knochenbrüchen) und einem Gürtel (der das Gewicht deutlich angenehmer
          verteilt).
        </p>
        <p>
          Römisches Geflecht besteht aus eher kleinen Ringen (5-7mm
          Innendurchmesser, 7-9mm Außendurchmesser). Dabei wurde die 4-in-1
          Methode verwendet. Der innere Ring war dabei ausgestanzt (vergleichbar
          mit einer Unterlegscheibe), die anderen Ringe wurden vernietet. Die
          gestanzten Ringe mussten nicht vernietet werden und dürften somit eine
          Zeitersparnis in der Herstellung bedeutet haben. Vielleicht gaben sie
          auch größeren Schutz, da der Ring nicht so leicht aufgesprengt werden
          konnte. Die kleinen Ringe könnten eine direkte Antwort auf die damals
          verwendeten Stichwaffefn wie dem Gladius sein.
        </p>
        <p>
          Ein Kettenhemd zu stricken ist sehr zeitaufwändig, bedarf aber weniger
          Werkzeug als für eine Segmentata notwendig sind. Eben dieser
          Zeitaufwand ist auch der Grund, warum vernünftige Kettenhemden oft
          vergleichsweise teuer sind. Es ist aber zwingend von einem nicht
          vernieteten Kettenhemd abzuraten, da man auch so schon genug Ringe
          verliert und das auf den ersten Blick unauthentisch aussieht.
        </p>
      </div>
    </div>
  </PageIntro>
);

export default hamata;
