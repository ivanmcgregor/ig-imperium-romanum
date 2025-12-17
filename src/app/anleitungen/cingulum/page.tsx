import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Metadata } from "next";
import { Section } from "@/components/Section/Section";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Cingulum",
  description: "Anleitung für das römische Cingulum (Gürtel).",
  keywords: [
    "Cingulum",
    "Cingulum Militare",
    "Gürtel",
    "Römer",
    "Reenactment",
    "IG Romanum",
    "Anleitung",
    "Kleidung",
    "Ausrüstung",
  ],
  authors: [{ name: "IG Romanum" }],
  openGraph: {
    title: "IG Romanum - Anleitung Cingulum",
    description: "Anleitung für das römische Cingulum (Gürtel).",
    images: ["/images/banner.jpg"],
    type: "article",
    url: "https://www.ig-romanum.de/anleitungen/cingulum",
  },
  twitter: {
    card: "summary_large_image",
    title: "IG Romanum - Anleitung Cingulum",
    description: "Anleitung für das römische Cingulum (Gürtel).",
    images: ["/images/banner.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.ig-romanum.de/anleitungen/cingulum",
  },
};

const Cingulum = () => (
  <>
    <PageIntro
      img={`/AnleitungsBilder/cingulum.jpg`}
      imgAlt="Zeichnerische Darstellung eines römischen Cingulums"
    >
      <h1 className="mb-5">Das Cingulum</h1>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Das hauptsächliche Erkennungsmerkmal eines Legionärs war sein mit
            Metallplättchen beschlagener Gürtel. Dieser wurde sowohl auf der
            Tunika, als auch auf der Rüstung getragen. Die Metallplättchen
            konnten sehr hochwertig sein und bildeten teils eine Notfallwährung
            für die Legionäre, die verpfändet oder verkauft werden konnte. Unter
            dem Gürtel wurde bisweilen auch ein gefaltener Stoff getragen, in
            den Legionäre Alltagsgegenstände steckten.
          </p>
        </div>
      </div>
    </PageIntro>

    <Section title={"Geschichtlicher Hintergrund"}>
      <p>
        Mit der Zeit war der Gürtel einer gewissen Mode unterworfen, sodass die
        Breite und die Motive sich über die Zeit verändert haben. Eine sehr gute
        Einführung in das diese Mode gibt{" "}
        <a
          target="_blank"
          href="https://www.academia.edu/35955546/G%C3%BCrtel-_und_Riemenbeschl%C3%A4ge_in_den_Nordwestprovinzen._Das_milit%C3%A4rische_Formenspektrum_von_tiberisch_claudischer_bis_antoninischer_Zeit"
        >
          dieser Artikel von Eckhard Deschler-Erb
        </a>
        . Von einem zeitlichen Aspekt her kommen die relevanten Schnallen für
        eine Darstellung um 150 n.Chr. gegen Ende, insbesondere in Abbildung 4
        und 5. In der Gruppe gibt es einige selbst gemachte Gürtel, die sich an
        Funden mit Durchbruchornamentik orientieren. Es gibt eine Doktorarbeit
        von Stefanie Hoss "CINGULUM MILITARE - Studien zum römischen
        Soldatengürtel des 1. bis 3. Jahrhunderts n. Chr." die sich sehr
        ausführlich mit dem Thema beschäftigt und eine wunderbare Vielzahl an
        Abbildungen von Fundstücken bietet.
      </p>
    </Section>

    <Section title={"Herstellung eines Cingulum"}>
      <h3>Materialien</h3>
      <p className="mb-4">
        Es ist davon auszugehen, dass der Gürtel überwiegend aus Leder
        gearbeitet war. Es gibt Funde, bei denen das Leder zu der Zeit
        durchbrochen war (Thorsberg) oder mit Stickereien (z.T. Golddraht,
        Vimose) verziert war. Man kann entweder ein dünneres Leder nehmen,
        welches an beiden Längsseiten umgeklappt wird und am Rand vernäht wird
        (so entsteht ein Schlauch, der mit z.B. Stoff gefüllt war). Dann wurde
        der Schlauch der Länge nach mit zwei Ziernäten pro Seite versehen.
        Anhand der Formung des Gürtels auf einigen Grabsteinen könnte dieser am
        Rand auch dicker gewesen sein. Doch Leder und pflanzliche Bestandteile
        haben sich in unseren Breiten nicht gut erhalten, weshalb die Machart
        nicht abschließend und allumfassend geklärt werden kann. Entsprechend
        ist es für uns auch akzeptabel, einen dicken Lederriemen (z.B. etwa
        3-4mm dick) zu verwenden. Der Gürtel selbst hat meist eine Verjüngung an
        dem Teil, der durch die Schnalle geführt wird. Im zweiten Jahrhundert n.
        Chr. wurden die Bleche zunächst schmaler, dann durchbrochen -- es ist
        also gut denkbar, dass die Gürtel die Breite behalten haben und mehr
        sichtbar wurden. Auch Verzierungen werden so sichtbarer. Diese
        Entwicklung ist ein bisschen spekulativ, da es zu der Zeit eher
        einfachere Grabsteine gab, doch da im 3. Jahrhundert die Gürtel noch
        breiter und die Beschläge kleiner wurden, würde es ins Bild passen.
      </p>

      <p className="mb-4">
        Da die Verzierungen auch als "fest montierte Notfallgeldbörse"
        fungierten, waren sie oft aus werthaltigem Material, oft versilbert oder
        komplett aus Silber. Wir nehmen gerne Messing, da es damals auch
        wertvoll war, sich gut bearbeiten lässt und heutzutage deutlich
        erschwinglicher ist. Für Laien erweckt der goldene Glanz genau die
        richtigen Assoziationen, wenn man möchte, kann man das Messing aber
        immer noch versilbern.
      </p>

      <p className="mb-4">
        Die Beschläge waren wohl so auf dem Gürtel angeordnet, dass von der
        Zunge her wenige Beschläge kamen, dann die Aufhängung für den Pugio,
        dann einige Beschläge am Rücken entlang und schlussendlich die Schnalle
        in Verbindung mit der letzten Zierplatte. Die Halterung des Pugios
        konnte sowohl über ein Scharnier mit der angrenzenden Platte verbunden
        sein, als auch als eigenständiges Teil montiert werden.
      </p>

      <p className="mb-4">
        Die senkrecht herabhängenden Streifen bilden eine Art Schürze. Diese war
        der Mode unterworfen und variierte in der Länge, bevor es im Laufe des
        2. Jahrhunderts außer Mode geriet. Vermutlich erhofften sich die
        Legionäre eine Schutzwirkung ihrer Männlichkeit, doch diese ist
        erfahrungsgemäß eher gering. Laut Darstellungen waren die Streifen
        reichlich verziert, und doch ist die Fundlage schwierig, da viele Funde
        nicht eindeutig einem Gürtel zugeordnet werden können, sondern auch z.B.
        vom Geschirr eines Pferdes stammen könnten. Der wohl eindeutigste Fund
        wurde vor langer Zeit aus dem Rhein geborgen, einmal skizziert und ging
        dann verloren.
      </p>

      <p>
        Weitere Beispiele und Tipps zur Herstellung können auf{" "}
        <a target="_blank" href="https://www.larp.com/legioxx/balteus.html">
          Legio XX
        </a>{" "}
        gefunden werden.
      </p>
    </Section>
  </>
);

export default Cingulum;
