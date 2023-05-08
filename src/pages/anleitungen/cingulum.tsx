import { PageIntro } from "@/components/PageIntro/PageIntro";
import Banner from "@/images/banner.jpg";

const cingulum = () => (
  <PageIntro img={Banner}>
    <h2 className="mb-5">Das Cingulum</h2>
    <div className="row mb-4">
      <div className="col-md-10 offset-md-1">
        <p>
          Das hauptsächliche Erkennungsmerkmal eines Legionärs war sein mit
          Metallplättchen beschlagener Gürtel. Dieser wurde sowohl auf der
          Tunika, als auch auf der Rüstung getragen. Mit der Zeit war der Gürtel
          einer gewissen Mode unterworfen, sodass die Breite und die Motive sich
          über die Zeit verändert haben. Eine sehr gute Einführung in das diese
          Mode gibt{" "}
          <a
            target="_blank"
            href="https://www.academia.edu/35955546/G%C3%BCrtel-_und_Riemenbeschl%C3%A4ge_in_den_Nordwestprovinzen._Das_milit%C3%A4rische_Formenspektrum_von_tiberisch_claudischer_bis_antoninischer_Zeit"
          >
            dieser Artikel von Eckhard Deschler-Erb
          </a>{" "}
          (Von einem zeitlichen Aspekt kommen die relevanten Schnallen für eine
          Darstellung um 150 n.Chr. gegen Ende, insbesondere in Abbildung 4 und
          5. In der Gruppe gibt es selbst gemachte Gürtel, die von diesen
          Darstellungen inspiriert wurden. Für meinen Balteus lasse ich mich von
          Abb. 5,5 inspirieren.) Beispiele und Tipps zur Herstellung können auf{" "}
          <a target="_blank" href="https://www.larp.com/legioxx/balteus.html">
            Legio XX
          </a>{" "}
          gefunden werden.
        </p>
      </div>
    </div>
  </PageIntro>
);

export default cingulum;
