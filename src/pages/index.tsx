import Head from "next/head";
import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import { LinkButton } from "@/components/Button/LinkButton";
import { TeaserButton } from "@/components/Button/TeaserButton";
import { EventPreview } from "@/components/Events/Preview";

import Banner from "@/images/banner.jpg";
import Armor from "@/images/ruestungen.jpg";
import Shield from "@/images/anleitungen/scutum-außen-teaser.jpeg";

const Home = () => {
  return (
    <>
      <Head>
        <title>IG Romanum</title>
        <meta name="description" content="Website der IG Imperium Romanum" />
        <meta name="abstract" content="Die IG Romanum will das Leben um 150 n.Chr. in Rheinhessen durch aktives Benutzen und Erleben erforschen. Wir bauen und fertigen viele Gegenstände des römischen Alltags selbst und bieten so einen Einblick in das Lagerleben" />
        <meta name="keywords" content="Römer, Rheinhessen, Reenactment, Legionär, Auxiliar, Geschichte, Living History" />
      </Head>
      <PageIntro img={Banner} isHome={true}>
        <h2 className="mb-4 pb-4">SALVETE, AMICI</h2>
        <p className="spacedParagraph mb-4">
          Salvete Freunde der römischen Antike ! <br />
          Wir sind eine römische Interessengemeinschaft, die römische
          Bevölkerung im Zivilen wie auch militärischen Bereich um die Zeit
          150n. Chr. darstellt. Wir beziehen uns auf regionale Funde, auf
          Buchquellen, Aussagen und Berichte von Archäologen sowie Erfahrungen aus unserem Reenactment.
        </p>
        <p className="spacedParagraph mb-4">
          Du möchtest die römische Antike leben statt nur erleben? Du suchst Gleichgesinnte, wenn es um römische Kultur
          und Brauchtum geht? Dann bist du bei uns in der IG Romanum genau richtig.
        </p>
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3">
            <LinkButton to="/kontakt">Melde dich bei uns!</LinkButton>
          </div>
        </div>
      </PageIntro>
      <Section
        title={
          <span>
            Nächste Veranstal
            <span className="d-inline-block d-md-none">
              -<br />
            </span>
            tungen
          </span>
        }
      >
        <EventPreview />
        <div className="row mb-4 mt-4">
          <div className="col-md-6 offset-md-3">
            <LinkButton to="/termine">Alle Veranstaltungen ansehen</LinkButton>
          </div>
        </div>
      </Section>
      <Section title="Unsere Werte">
        <p className="mb-4">
          Da wir aus der Region kommen, fokussieren uns in unserer Darstellung auf die Civitas Vangionum, also dem
          heutigen Rheinhessen. Wir versuchen das römische Leben unserer Vorfahren vor 2000 Jahren nicht nur zu erleben,
          sondern auch zu leben und dies für andere durch unsere Bemühungen greifbar und nachvollziehbar zu machen.
        </p>
        <p className="mb-4">
          Wir bemühen uns um eine gute Darstellung der römischen Antike, die sich an historischen Quellen und Funden
          orientiert, aber auch den Spaß und die Freude an der Sache nicht zu kurz kommen lässt. In unserer Gruppe
          nähen, basteln, schmieden und bauen wir sehr viel selbst. Dabei finden wir die Balance, ein Hobby neben dem
          Beruf zu haben und erlauben uns auch kleinere (für Laien nicht erkennbare) Abkürzungen und Kompromisse.
        </p>
        <p>
          Wenn wir gemeinsam unterwegs sind oder lagern, sind uns der Zusammenhalt und eine gute Stimmung innerhalb der
          Gruppe sehr wichtig. Wir schätzen die sportliche Herausforderung durch Kämpfe, Formationstraining und
          Disziplinarübungen. Natürlich legen wir auch Wert auf Gastfreundschaft und ein gemütliches Weinchen am
          Lagerfeuer. Und vor allem nehmen wir uns selbst nicht allzu ernst.
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
