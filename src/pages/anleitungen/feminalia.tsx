import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import Banner from "@/images/banner.jpg";
import Feminalia from "@/images/anleitungen/nicos_feminalia.jpg";
import Image from "next/image";
import { AnleitungsBild } from "@/components/AnleitungsBild/AnleitungsBild";

const feminalia = () => (
  <>
    <PageIntro img={Banner}>
      <h2 className="mb-5">Die Feminalia</h2>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Nördlich der Alpen waren Hosen im Winter schlicht praktisch. Die
            römischen Soldaten haben sich dieser Mode im Laufe der Zeit
            angepasst. Es sollte allerdings noch länger dauern, bis diese Mode
            in Rom ankam und wurde dort noch als barbarisch betrachtet, während
            die Soldaten schon die Wärme von Hosen genossen.
          </p>
        </div>
      </div>
    </PageIntro>

    <Section title="1. Variante">
      <AnleitungsBild src={Feminalia} alt="Nicos Anleitung für Feminalia" />
    </Section>

    <Section title={"2. Variante"}>
      <p>
        Alternativ kannst du auch andere für die Zeit übliche Schnittmuster
        verwenden. Es ist davon auszugehen, dass der Schnitt der Thorsberghose
        auch schon zu jener Zeit verwendet wurde und sich Legionäre bei lokalen
        Händlern eingedeckt haben. Ich habe
        <a
          target="_blank"
          href="http://www.shelaghlewins.com/reenactment/thorsbjerg_construction/thorsbjerg_trews_construction.htm"
        >
          diese Anleitung
        </a>
        verwendet.
      </p>
    </Section>
  </>
);

export default feminalia;
