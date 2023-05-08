import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import Banner from "@/images/banner.jpg";

const subarmalis = () => (
  <>
    <PageIntro img={Banner}>
      <h2 className="mb-5">Die Subarmalis</h2>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Die Subarmalis ist das römische Gegenstück zum mittelalterlichen
            Gambeson. Hierbei handelt es sich im wesentlichen um einen dicken
            Stoff (oder mehrere Lagen dünnen Stoff), welcher die Wucht von
            Aufschlägen abfedert und verteilt. Dies ist absolut notwendig unter
            jeder Art von Rüstung (lorica), aber absolut unabdingbar unter
            Kettenhemden. Mit der Zeit wurden Pteruges an den Armen und Torso
            angebracht, die vor allem die Kleidung aus Stoff schützten. Darüber
            hinaus könnten sie eine geringe Schutzwirkung gehabt haben. Einige
            Beispiele gibt es beim
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
        beschrieben wurde, hat man hier einen gewissen Freiraum. Die Subarmalis
        besteht insbesondere aus einem Korpus, der aus einigen Lagen dicken
        Stoff bestehen kann, der miteinander vernäht ist. Optional kann man dann
        Ptergys anbringen. Zur effektiven Polsterung könnte man mehrere Lagen
        Stoffdecken (z.B. Wolldecken) vernähen.
      </p>
      <p>
        Tipps gibts beispielsweise bei
        <a target="_blank" href="https://www.larp.com/legioxx/subarm.html">
          Legio XX
        </a>
        . Lediglich wiedersprechen muss man, dass für sie die Polsterung des
        Körpers bei Lorica Segmentata nicht so wichtig ist. Nicht nur kann es an
        der Hüfte bequemer sein, sondern es hilft definitiv auch einen Aufprall
        zu dämpfen.
      </p>
    </Section>
  </>
);

export default subarmalis;
