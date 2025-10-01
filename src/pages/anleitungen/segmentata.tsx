import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import Banner from "@/images/banner.jpg";
import Segmentata from "@/images/ruestungen.jpg";
import { AnleitungsBild } from "@/components/AnleitungsBild/AnleitungsBild";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Segmentata",
  description: "Hintergrundinformationen zum römischen Segmentpanzer",
};

const segmentata = () => (
  <>
    <Head>
      <title>IG Romanum - Anleitung Segmentata</title>
      <meta
        name="description"
        content="Hintergrundinformationen zum römischen Segmentpanzer"
      />
      <meta
        name="keywords"
        content="Segmentata, Lorica Segmentata, Römer, Reenactment, IG Romanum, Anleitung, Ausrüstung, Rüstung"
      />
      <meta name="author" content="IG Romanum" />
      <meta property="og:title" content="IG Romanum - Anleitung Segmentata" />
      <meta
        property="og:description"
        content="Hintergrundinformationen zum römischen Segmentpanzer"
      />
      <meta property="og:image" content="/images/banner.jpg" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="IG Romanum - Anleitung Segmentata"
      />
      <meta
        name="twitter:description"
        content="Hintergrundinformationen zum römischen Segmentpanzer"
      />
      <meta name="twitter:image" content="/images/banner.jpg" />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href="https://www.ig-romanum.de/anleitungen/segmentata"
      />
    </Head>
    <PageIntro img={Banner}>
      <h2 className="mb-5">Die Lorica Segmentata</h2>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Die vermutlich römischste und deshalb auch bei Darstellern
            beliebte Rüstung ist die Segmentrüstung. Diese Rüstung der schweren
            Infanterie funktioniert insbesondere mit dem Scutum: Der Schild
            schützt den Körper, alle Schläge, die über den Schild kommen werden
            vom ausgeprägten den Schulterschutz abgefangen. Im laufe der Zeit
            gab es verschiedene Typen dieser Rüstung, beschrieben in dem in der
            Szene bekannten Buch von M.C. Bishop zu{" "}
            <a
              target="_blank"
              href="https://www.researchgate.net/publication/301655364_Lorica_Segmentata_Volume_I_A_Handbook_of_Articulated_Roman_Plate_Armour"
            >
              Articulated Roman Plate Armor
            </a>
            . Das Buch enthält viele Beschreibungen und Zeichnungen.
          </p>
        </div>
      </div>
    </PageIntro>
    <Section title="Anfertigen einer Segmentata">
      <p>
        Wenn man eine Segmentata selbst herstellen will braucht man einiges an
        Werkzeug und Geduld, es gibt jedoch Anleitungen bei{" "}
        <a target="_blank" href="https://www.larp.com/legioxx/lorica.html">
          Legio XX
        </a>{" "}
        und{" "}
        <a
          target="_blank"
          href="http://www.travelsoutwest.com/docs/seg_instr.pdf"
        >
          Alex Matras
        </a>
        . Mit dem Bau, der Reparatur und der Instandhaltung unserer Rüstungen
        haben wir aber auch in unserer Gruppe einen guten Wissensfundus
        aufgebaut.
      </p>
      <p>
        Die klare Empfehlung ist, zuerst einen Pappprototypen zu bauen, damit
        man die ungefähren Dimensionen und Anordnungen ausprobieren kann, bevor
        man sich ans Metall wagt. Und auf jeden Fall sollte man ein bisschen
        Puffer in der Breite einplanen, nicht dass einem die Rüstung dann (und
        sei es in ein paar Jahren) zu eng ist und man sie nicht tragen kann.
        Idealerweise ist die Subarmalis bereits fertig, wenn es an die
        Segmentata geht. Ist die Rüstung zu weit, so wird sie insbesondere unter
        den Armen unangenehm das Blut abdrücken.
      </p>
    </Section>
    <Section title="Kauf einer Segmentata">
      <p>
        Vor dem Kauf sollte man sich sicher sein, welche Zeit man darstellen
        möchte, da es unterschiedliche Rüstungen zu unterschiedlichen Zeiten
        gab. Natürlich gibt es da auch eine Menge Überschneidungen und
        Ungewissheit, sodass man sicherlich auch nicht vollends eingeschränkt ist.
        Vor dem Kauf sollte man idealerweise die unterschiedlichen Typen und
        verfügbaren Größen anprobieren, da sie unterschiedliche Passformen haben.
        Das entfällt bei maßgeschneiderten Rüstungen natürlich, doch diese sind
        erwartbar deutlich teurer.
      </p>
      <p>
        Wenn man aber eine Rüstung kauft, so muss man (insbesondere bei den
        günstigeren Modellen) noch einige Anpassungen vornehmen, damit sie
        richtig sitzt. Wir haben den Eindruck, dass insbesondere bei den Depeka
        Modellen über die letzten Jahre immer mehr gespart wird und die Qualität
        nachlässt. Einige Riemen und Stifte muss man von Werk aus direkt austauschen,
        um eine tragbare Rüstung daraus zu machen. Auch sind die Platten oftmals
        nicht so gebogen, dass man eine Rüstung direkt tragen kann oder will.
        Spätestens nach einigen Jahren des Tragens müssen sicherlich die meisten
        Lederriemen ausgetauscht werden, da sie sich geweitet haben oder spröde
        geworden sind.
      </p>
      <p>
        Hier ein Vergleich einer einfachen Rüstung links vor, rechts nach
        unseren Anpassungen.
      </p>
      <AnleitungsBild
        src={Segmentata}
        alt="Segmentatas nach Kauf (links) und nach grober Anpassung (rechts)"
      />
    </Section>
  </>
);

export default segmentata;
