import { PageIntro } from "@/components/PageIntro/PageIntro";
import Banner from "@/images/banner.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Schuhe",
  description: "Hintergrundinformationen zu römischem Schuhwerk",
};

const schuhe = () => (
  <PageIntro img={Banner}>
    <h2 className="mb-5">Die Schuhe</h2>
    <div className="row mb-4">
      <div className="col-md-10 offset-md-1">
        <p>
          Schuhfunde aus aufgegebenen Brunnen und Befestigungsanlagen
          (beispielsweise am Hadrian Wall) zeigen eine große Vielfalt an
          Schuhen. Nördlich der Alpen sind geschlossene Schuhe für den Winter
          als normal zu betrachten -- Sandalen im Winter sind keine gute Idee.
          Geschlossene Schuhe sind für neue Darsteller also gegebenenfalls
          besser, weil sie das ganze Jahr verwendet werden können.
        </p>
        <p>
          Im Militärdienst war es essenziell, guten Halt auf dem Boden zu haben.
          Die Schuhe waren entsprechend benagelt (gängige Praxis bis
          einschließlich zum ersten Weltkrieg). Das selbe Prinzip wird bei
          heutigen Sportschuhen mit Spikes weiter verwendet. Mit Nägeln unterm
          Schuh hat man im Gelände besseren Halt, das Laufen auf stein ist
          allerdings unangenehm bis rutschig. Es gibt daher die Aussage, dass
          die römischen Armeen oftmals neben den römischen Handelsstraßen auf
          einem extra dafür von Gestrüpp befreiten Bereich wanderten. Tipps zum
          Benageln gibt es z.B. bei{" "}
          <a target="_blank" href="http://florentius.com/calcei-hobnail.htm">
            florentius
          </a>
          . Bei Schuhen mit glatter Ledersohle auf leicht schrägem oder nassen
          Gras wird der Mangel an Haftung schnell offensichtlich, weshalb wir
          dazu tendieren, dass auch zivilisten außerhalb der Stadt (z.B.
          Feldarbeiter) zumindest leichte Benagelung unter den Schuhen gehabt
          haben dürften.
        </p>
        <h3 className="mt-4">Calcei</h3>
        <p>
          Dieser Typ schuh ist einem modernen Stiefel ähnlich. Er ist
          geschlossen und geht meist bis über den Knöchel. Schöne Beispiele und
          Tipps gibt es bei{" "}
          <a target="_blank" href="http://florentius.com/calcei-main.htm">
            florentius
          </a>
          .
        </p>
        <h3 className="mt-4">Caligae</h3>
        <p>
          Die typischen Militärsandalen haben den Vorteil, dass der Fuß gut
          belüftet ist und auch nach einer Flussdurchquerung wieder trocknet.
          Die Ausführlichste Anleitung ist wohl die von{" "}
          <a
            target="_blank"
            href="https://web.archive.org/web/20190406043535/http://www.legiotricesima.org/campusMartis/MakingCaligae/MakingAuthenticCaligae.html"
          >
            legio tricesima (via Web Archive)
          </a>
          .
        </p>
      </div>
    </div>
  </PageIntro>
);

export default schuhe;
