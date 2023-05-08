import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import Image from "next/image";
import Banner from "@/images/banner.jpg";
import Focale from "@/images/anleitungen/nicos_focale.jpg";
import { AnleitungsBild } from "@/components/AnleitungsBild/AnleitungsBild";

const focale = () => (
  <>
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
