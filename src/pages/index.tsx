import Head from "next/head";
import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import { LinkButton } from "@/components/Button/LinkButton";
import { TeaserButton } from "@/components/Button/TeaserButton";
import { EventPreview } from "@/components/Events/Preview";

import Banner from "@/images/banner.jpg";
import Armor from "@/images/rüstungen.jpg";
import Shield from "@/images/anleitungen/scutum-außen-teaser.jpeg";

const Home = () => {
  return (
    <>
      <PageIntro img={Banner} isHome={true}>
        <h2 className="mb-4 pb-4">SALVETE, AMICI</h2>
        <p className="spacedParagraph mb-4">
          Salvete Freunde der römischen Antike ! <br />
          Wir sind eine römische Interessengemeinschaft, die römische
          Bevölkerung im Zivilen wie auch militärischen Bereich um die Zeit
          150n. Chr in der Region Civitas Vangionum (Heutiges Rheinhessen)
          darzustellen versucht. Dabei beziehen wir uns auf regionale Funde, auf
          Buchquellen, Aussagen und Berichte von Archäologen sowie Autodidaktik
          die wir selber im Ausleben antiker Lebensweise betreiben.
        </p>
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3">
            <LinkButton to="/galerie">Bildergalerien</LinkButton>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3">
            <LinkButton to="/mitglieder">Unsere Mitglieder</LinkButton>
          </div>
        </div>
      </PageIntro>
      <Section title="Nächste Veranstaltungen">
        <EventPreview />
        <div className="row mb-4 mt-4">
          <div className="col-md-6 offset-md-3">
            <LinkButton to="/termine">Alle Veranstaltungen ansehen</LinkButton>
          </div>
        </div>
      </Section>
      <Section title="Anspruch der Gruppe">
        <p>
          Wir wollen antike Dinge durch aktives Benutzen und Erleben erforschen.
          Dabei bauen und fertigen wir viele Gegenstände des römischen Alltags,
          insbesondere dem eines Soldaten. Oft setzen wir auf Autodidaktik,
          insbesondere in Bereichen wie Kampftechniken, Schützen, Gesang,
          Kochen, Schmieden, Nähen usw.
        </p>

        <p>
          Da wir alle berufstätig sind, dabei aber keine Schneider:
          Maschinennähte sind für uns akzeptabel, wenn sie nicht überdeutlich
          sichtbar sind. Wir freuen uns aber sehr darüber, wenn ein
          Kleidungsstück authentisch ist. Bei der Stoffverarbeitung bevorzugen
          wir Leinen und Wollstoffe, insbesondere für Anfänger ist aber auch
          Baumwolle in Ordnung. Je weiter man in der Darstellung voran
          schreitet, desto mehr sollte man sich weg von Baumwolle orientieren.
        </p>
        <p>
          Moderne Materialien, die auch direkt als solche zu erkennen sind, sind
          in der Gruppe verpönt. Dazu zählen insbesondere Aluminium, Plastik und
          Polyester. Aber auch Hohlnieten sind nicht erwünscht.
        </p>
        <p>
          Wir orientieren unsere Darstellung an der Zeit um 150 nach Christus.
          Wir legen uns dabei bewusst nicht komplett fest und folglich sind für
          uns auch Darstellungen und Fundstücke, die etwa 20 Jahre davor oder
          danach datiert werden genehm. Etwas, das 100 Jahre davor oder danach
          datiert wird, passt allerdings nicht in den Rahmen. Wichtig ist
          vorrangig ein atmosphärisches, stimmiges, historisch korrektes Bild
          für den Normalbürger und für Römisch interessierte und belesene.
          Jedoch nicht für A-Päpste oder für Historiker, welche jede Niete genau
          datieren können und wollen. Schlussendlich soll es ein uns Spaß
          machendes Hobby sein, jedoch nicht unsere alleinige Lebensaufgabe.
        </p>
      </Section>
      <Section title="Tipps und Tricks">
        <div className="row mb-4 mt-4">
          <div className="col-md-6">
            <TeaserButton to="/anschaffungsratgeber" img={Armor.src}>
              Anschaffungsratgeber
            </TeaserButton>
          </div>
          <div className="col-md-6">
            <TeaserButton to="/anleitungen" img={Shield.src}>
              Zu unseren (Bau)anleitungen
            </TeaserButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
