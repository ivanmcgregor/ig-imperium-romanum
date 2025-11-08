import { PageIntro } from "@/components/PageIntro/PageIntro";
import type { Member } from "@/components/Members/types";

import Banner from "@/images/banner/banner_mitglieder.jpg";
import { Members } from "@/components/Members/Members";
import { Metadata } from "next";
import { membersRaw } from "@/app/mitglieder/membersRaw";

const groups: Array<Array<Member>> = [];
const times = Math.ceil(membersRaw.length / 3);
for (let i = 0; i <= times; i++) {
  groups.push(membersRaw.splice(0, 3));
}

export const metadata: Metadata = {
  title: "IG Romanum - Mitglieder",
  description: "Hier sind alle aktiven Mitglieder mit Bild zu sehen",
  keywords: [
    "Mitglieder",
    "IG Romanum",
    "Römer",
    "Reenactment",
    "Legionär",
    "Auxiliar",
    "Darsteller",
  ],
  authors: [{ name: "IG Romanum" }],
};

const Mitglieder = () => (
  <>
    <PageIntro
      img={Banner}
      imgAlt="Die Mitglieder der IG Romanum präsentieren sich vor ihrem Lager"
    >
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

export default Mitglieder;
