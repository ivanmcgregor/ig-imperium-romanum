import { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import { LinkButton } from "@/components/Button/LinkButton";
import { TeaserButton } from "@/components/Button/TeaserButton";
import { EventPreview } from "@/components/Events/Preview";
import { GallereyPreview } from "@/components/GallereyPreview/GalleryPreview";

import Banner from "@/images/banner.jpg";
import Armor from "@/images/ruestungen.jpg";
import Shield from "@/images/anleitungen/scutum-außen-teaser.jpeg";

export const metadata: Metadata = {
  title: "IG Romanum",
  description: "Website der IG Imperium Romanum",
  abstract:
    "Die IG Romanum will das Leben um 150 n.Chr. in Rheinhessen durch aktives Benutzen und Erleben erforschen. Wir bauen und fertigen viele Gegenstände des römischen Alltags selbst und bieten so einen Einblick in das Lagerleben",
  keywords: [
    "Römer",
    "Rom",
    "römisches Reich",
    "Rheinhessen",
    "Rheinland-Pfalz",
    "Wonnegau",
    "Worms",
    "Wormser Römer",
    "Römer Gruppe",
    "Reenactment",
    "Reenactor",
    "Römer Verein",
    "Römer Darsteller",
    "Antike",
    "Kaiserzeit",
    "Kaiserliche Römer",
    "Mainzer Römer",
    "Mainz",
    "150 nach Christus",
    "Primigenia",
    "Legio XXII",
    "22. Legion",
    "Legionär",
    "Auxiliar",
    "Geschichte",
    "Living History",
    "Kaiser Antonius Pius",
  ],
  authors: [{ name: "IG Romanum" }],
  openGraph: {
    title: "IG Romanum",
    description:
      "Die IG Romanum will das Leben um 150 n.Chr. in Rheinhessen durch aktives Benutzen und Erleben erforschen. Wir bauen und fertigen viele Gegenstände des römischen Alltags selbst und bieten so einen Einblick in das Lagerleben",
    images: ["/images/banner.jpg"],
    type: "website",
    url: "https://www.ig-romanum.de/",
  },
  twitter: {
    card: "summary_large_image",
    title: "IG Romanum",
    description:
      "Die IG Romanum will das Leben um 150 n.Chr. in Rheinhessen durch aktives Benutzen und Erleben erforschen. Wir bauen und fertigen viele Gegenstände des römischen Alltags selbst und bieten so einen Einblick in das Lagerleben",
    images: ["/images/banner.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.ig-romanum.de/",
  },
};

const Home = () => {
  return (
    <>
      <PageIntro
        img={Banner}
        isHome={true}
        imgAlt="Die Mitglieder der IG Romanum präsentieren sich vor ihrem Lager"
      >
        <h1 className="h4 mb-4 pb-4">Römisches Reenactment in Rheinhessen</h1>
        <h2 className="text">Salvete Freunde der römischen Antike!</h2>
        <p className="spacedParagraph mb-4">
          Wir sind eine Interessengemeinschaft, die römische Bevölkerung im
          Zivilen wie auch militärischen Bereich um die Zeit 150 n. Chr.
          darstellt. Wir beziehen uns auf regionale Funde, auf Buchquellen,
          Aussagen und Berichte von Archäologen sowie Erfahrungen aus unserem
          Reenactment.
        </p>
        <p className="spacedParagraph mb-4">
          Du möchtest die römische Antike leben statt nur erleben? Du suchst
          Gleichgesinnte, wenn es um römische Kultur und Brauchtum geht? Dann
          bist du bei uns in der IG Romanum genau richtig.
        </p>
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3">
            <LinkButton to="/kontakt">Melde dich bei uns!</LinkButton>
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

      <Section title="Wissenswertes über uns">
        <h3>Unsere Philosophie</h3>
        <p className="mb-3">
          Wir bemühen uns um eine gute Darstellung der römischen Antike, die
          sich an historischen Quellen und Funden orientiert, aber auch den Spaß
          und die Freude an der Sache nicht zu kurz kommen lässt. In unserer
          Gruppe nähen, basteln, schmieden und bauen wir sehr viel selbst. Dabei
          finden wir die Balance, ein Hobby neben dem Beruf zu haben und
          erlauben uns auch kleinere (für Laien nicht erkennbare) Abkürzungen
          und Kompromisse.
        </p>

        <p className="mb-5">
          Wenn wir gemeinsam unterwegs sind oder lagern, sind uns der
          Zusammenhalt und eine gute Stimmung innerhalb der Gruppe sehr wichtig.
          Wir schätzen die sportliche Herausforderung durch Kämpfe,
          Formationstraining und Disziplinarübungen. Natürlich legen wir auch
          Wert auf Gastfreundschaft und ein gemütliches Weinchen am Lagerfeuer.
          Vor allem nehmen wir uns selbst nicht allzu ernst.
        </p>

        <GallereyPreview />

        <h3 className="mt-5">Römisches Reenactment</h3>
        <p className="mb-3">
          Reenactment ist das möglichst authentische Wiederauflebenlassen von
          vergangenen geschichtlichen Ereignissen und Zeiten. Dabei geht es
          darum, eine Darstellung nah am Original selbst zu erleben und für
          beistehende erlebbar zu machen. Dies kann durch das Nachstellen von
          konkreten Ereignissen wie Schlachten oder auch dem alltäglichen Leben
          passieren.
        </p>
        <p className="mb-5">
          Wir bieten diesen Einblick entsprechend der anwesenden
          Gruppenmitgliedern je nach Veranstaltung. In der Gruppe ist die
          militärische Darstellung stärker ausgeprägt, weshalb häufig die
          verschiedenen Aspekte des Lebens von Legionären und Auxilliaren im
          Fokus steht. So üben wir das Agieren in Formation, den Umgang mit
          Waffen und kochen im Lager authentischen römischen Puls. Aber in der
          Gruppe wird beispielsweise auch Handwerk betrieben, so kann man
          beispielsweise Nadelbinden im Lager beobachten. Wir zeigen den
          Besuchern auch gerne unsere Ausrüstung und erklären diese.
        </p>

        <h3>Experimentelle Archäologie und Rekonstruktionen</h3>
        <p className="mb-3">
          Bei der experimentellen Archäologie geht es darum, Informationen aus
          Texten und Funden praktisch anzuwenden. Hierbei werden Gegenstände
          nachgebaut und benutzt. So kann man beispielsweise herausfinden, wie
          man mit einem Werkzeug gearbeitet hat und Rückschlüsse darauf ziehen,
          wie viel dieser Arbeit an einem Tag damit verrichtet werden konnte und
          wie lange es also gedauert haben dürfte, eine Gewisse Anzahl von
          Gegenständen damit zu fertigen.
        </p>
        <p className="mb-3">
          Bei uns in der Gruppe werden viele Gegenstände selbst gefertigt, wobei
          wir natürlich durch das Verwenden eben jener Gegenstände lernen, auf
          was es ankommt. Je nach Art und Größe des Projekts verwenden wir
          authentische Fertigungsweisen und Werkzeuge oder greifen auf moderne
          Hilfsmittel zurück, um das Projekt überhaupt realisieren zu können.
        </p>
        <p className="mb-3">
          Ein gutes Beispiel ist die Ausrüstung unserer Soldaten. Auch bei
          Zugekauftem Material stellt man schnell fest, dass es nicht ohne
          weiteres getragen werden kann, da es in der Praxis einfach unbequem
          oder unpraktisch ist. Wir tragen die Rüstungen und Waffen nicht nur
          beim Posieren für Fotos, sondern marschieren damit auch über weitere
          Strecken oder Kämpfen in voller Montur. Auch wenn der Kampf keiner um
          Leben und Tod ist, so lernt man die Vor- und Nachteile der Ausrüstung
          schnell kennen. Durch wiederholte Anpassungen beispielsweise bei Form
          und Polsterung kommt man zur Ausrüstung wie sie auch damals am
          Sinnvollsten gewesen sein dürfte.
        </p>
        <p className="mb-3">
          Wir haben im Laufe der Zeit einige Anleitungen zum Nachbauen von
          unserer selbstgemachten oder angepassten Ausrüstung gesammelt, andere
          auch selbst geschrieben und hier auf der Seite veröffentlicht. Einfach
          herzustellen sind Dinge aus Stoff wie Tuniken, Hosen und Mäntel.
          Metallbearbeitung ist deutlich aufwändiger und erfordert deutlich mehr
          Werkzeug und einen Raum zum Arbeiten. Aber auch Rüstungen und Gürtel
          samt Beschlägen haben wir in der Gruppe schon gefertigt. Dazwischen
          siedelt sich die Fertigung des typisch römischen Schilds, des Scutums,
          an. Schau doch mal Vorbei:
        </p>
        <div className="row mb-5">
          <div className="offset-md-3 col-md-6">
            <TeaserButton to="/anleitungen" img={Shield.src}>
              Zu unseren (Bau)anleitungen
            </TeaserButton>
          </div>
        </div>

        <h3 className="">Römer in Rheinhessen</h3>

        <p className="mb-3">
          Die Römer haben die Region in den etwa 500 Jahren, in denen sie hier
          waren, stark geprägt. Im ehemaligen Legionslager Moguntiacum (Mainz)
          finden sich noch heute viele Spuren davon. Vom römischen
          Bühnentheather und Grabmahl für Drusus über bedeutende Schiffsfunde
          bis hin zu den Überresten eines Aquädukts findet sich hier alles, was
          das römische Leben ausmachte. Auch in Borbetomagus (Worms) und Altiaia
          (Alzey) finden sich zahlreiche Spuren der römischen Vergangenheit.
          Dazu kommen etliche Gehöfte, Tempel, Straßen, Grabsteine und andere
          Relikte, die über das ganze Gebiet verstreut sind.
        </p>
        <p className="mb-3">
          In Mainz war zu unserer Zeit die Legio XXII Primigenia stationiert.
          Das rheinhessische Umland stellte viel landwirtschaftliche Fläche zur
          Versorgung der Garnison. Zahlreiche Gutshöfe (Villae Rusticae) zeugen
          noch heute von der intensiven Nutzung der Region durch die Römer. Die
          Legionäre waren in Mainz stationiert, damit sie bei Bedarf schnell aus
          dem Hinterland hin zu einfallenden Truppen an der Grenze am Limes
          verlegt werden konnten. Die Soldaten wurden aber in friedlichen Zeiten
          als Ingenieure und Bauarbeiter bei Ausbau und Instandhaltung der
          Infrastruktur eingesetzt.
        </p>
        <p className="mb-3">
          In der Grenzregion des römischen Reichs am Limes trafen Kulturen
          aufeinander und man sieht beispielsweise anhand von Grabsteinen, wie
          die vorher ansässigen Kelten und Germanen sich an die römische Kultur
          anpassten und diese mit eigenen Traditionen vermischten. Dazu kamen
          natürlich auch viele Auxiliartruppen, die meist aus einer Region
          rekrutiert wurden und dann am anderen Ende des Reichs stationiert
          waren und wieder eigene Einflüsse mitbrachten.
        </p>
        <p className="mb-5">
          Wir kommen aus der Region, haben Mitglieder aus Mainz, Worms,
          Wiesbaden und Darmstadt und haben viele der Funde in direkter
          Nachbarschaft. Bei so einem besonderen Umfeld wollen wir uns natürlich
          auf dieses fokussieren.
        </p>

        <h3 className="">Was du mitbringen solltest</h3>

        <p className="mb-3">
          Wir sind immer offen für neue Mitglieder, egal ob zivil oder
          militärisch, aber wir legen Wert darauf, dass du zur Gruppe passt. Wir
          genießen unser Hobby gemeinsam und wollen eine gute Zeit miteinander
          verbringen, da musst du dazupassen. Entsprechend wollen wir dich
          natürlich im Vorfeld gerne kennen lernen. Außerdem solltest du Lust
          haben, dich ein Stück weit in ein Thema einzuarbeiten. Wenn du zu
          Veranstaltungen zusagst, erwarten wir, dass du auch erscheinst.
        </p>
        <p className="mb-3">
          Wir treffen uns zu Veranstaltungen, die meist in Rheinlandpfalz und
          Hessen stattfinden. Du solltest gut nach Mainz, Wiesbaden oder Worms
          kommen. Wir treffen uns auch außerhalb von Reenactmentveranstaltungen,
          beispielsweise zum gemeinsamen Museumsbesuch oder zum Stammtisch.
        </p>
        <p className="mb-3">
          Wer neu startet, braucht erstmal gar keine Ausrüstung, weil wir viel
          verleihen können. So lernen wir uns erstmal kennen. Und man kann auch
          mit wenig Ausrüstung gut einen Zivilisten darstellen. Wenn du dich
          dann entschieden hast, bei uns mitzumachen, helfen wir dir gerne bei
          der Auswahl und Beschaffung deiner eigenen Ausrüstung. Schau doch
          schonmal auf unseren Anschaffungsratgeber:
        </p>

        <div className="row mb-5">
          <div className="offset-md-3 col-md-6">
            <TeaserButton to="/anschaffungsratgeber" img={Armor.src}>
              Anschaffungsratgeber
            </TeaserButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
