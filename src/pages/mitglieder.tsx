import { PageIntro } from "@/components/PageIntro/PageIntro";
import type { Member } from "@/components/Members/types";

import Banner from "@/images/banner/banner_mitglieder.jpg";
import Andre from "@/images/mitglieder/Andre.jpg";
import Fabian from "@/images/mitglieder/Fabian.jpg";
import Franzi from "@/images/mitglieder/Franzi.jpg";
import Kristin from "@/images/mitglieder/Kristin.jpg";
import Lars from "@/images/mitglieder/Lars.jpg";
import Manu from "@/images/mitglieder/Manu.jpg";
import Max from "@/images/mitglieder/Max.jpg";
import Nico from "@/images/mitglieder/Nico.jpg";
import Nina from "@/images/mitglieder/Nina.jpg";
import Thomas from "@/images/mitglieder/Thomas.jpg";
import { Members } from "@/components/Members/Members";
import { Metadata } from "next";

const membersRaw = [
  {
    img: Nico,
    name: "Optio Nicos",
    text: 'Nach dem "überraschenden" Ableben des Zenturios vorläufiger Kopf der Truppe. Man munkelt er versteckt mittels dem Helmbusch eine alte Kriegsnarbe.',
  },
  {
    img: Lars,
    name: "Vexillifer Larsos",
    text: "Er schwört darauf das Vexillium in der Not so rabiat zu verteidigen wie seinen Ruf als Frauenschwarm.",
  },
  {
    img: Fabian,
    name: "Tesserarius Fabius",
    text: "Behauptungen nach ist er der einzige der Truppe, der schreiben kann. Zufällig muss dringend etwas geschrieben werden, wenn es harte Arbeit gibt...",
  },
  {
    img: Kristin,
    name: "Rhamis, Tochter eines Chatten",
    text: "Verschleppt nach Rom, konnte sie entkommen und schloss sich zu ihrem eigenen Schutz dieser Gruppe Legionären an um wieder in ihre Heimat zu gelangen.",
  },
  {
    img: Thomas,
    name: "Legionär Thomasus",
    text: "Erzählt gerne Geschichten über die Siege seiner Legion, auch wenn die Meisten davon freilich erfunden sind.",
  },
  {
    img: Nina,
    name: "Bürgerin Nina",
    text: "Kameraden erzählen sich, sie habe ein Warn-Mosaik eines Hundes vor ihrem Hof, das an Größe nur durch das Tier selbst übertroffen wird.",
  },
  {
    img: Manu,
    name: "Legionär Manus",
    text: 'Sprichwörtlich die rechte Hand des Optios wenn es Aufgaben besonderer "Präzision" geht.',
  },
  {
    img: Franzi,
    name: "Griechin Franzisca",
    text: "Bediente als Freigelassene Schankwirtin in der Nähe des Kastells indem sich Legionär Manus befand, der sie oft aufsuchte.",
  },
  {
    img: Andre,
    name: "Auxiliar Andreus",
    text: "Ist als Kind in einen Kessel voller Mulsum gefallen, und lehrt seitdem die Barbaren das Fürchten.",
  },
  {
    img: Max,
    name: "Legionär Maxentius",
    text: "Gnade den Barbaren, wenn Sie die Mulsumlieferung überfallen.",
  },
];
const groups: Array<Array<Member>> = [];
const times = Math.ceil(membersRaw.length / 3);
for (let i = 0; i <= times; i++) {
  groups.push(membersRaw.splice(0, 3));
}

export const metadata: Metadata = {
  title: "IG Romanum - Mitglieder",
  description: "Hier sind alle aktiven Mitglieder mit Bild zu sehen",
};

const mitglieder = () => (
  <>
    <PageIntro img={Banner}>
      <h2 className="mb-5">Unsere Mitglieder</h2>
      <div className="row mb-4">
        <div className="col col-md-10 offset-md-1">
          <p>
            Hier sind alle aufgelistet, die momentan in der IG Imperium Romanum
            aktiv sind.
          </p>
          <p>
            Auch wenn die Liste aktuell viele Soldaten enthält, so freuen wir
            uns doch, wenn wir bald hoffentlich mehr der Zivilbevölkerung
            darstellen können.
          </p>
          <p>
            Wir wollen uns besonders bei{" "}
            <a target="_blank" href="https://www.instagram.com/pictrail_de">
              Christine Lincke
            </a>{" "}
            bedanken, die für uns die meisten der hier zu sehenden Portraits
            aufgenommen hat.
          </p>
        </div>
      </div>
    </PageIntro>

    <Members memberGroups={groups} />
  </>
);

export default mitglieder;
