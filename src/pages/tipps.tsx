import { PageIntro } from "@/components/PageIntro/PageIntro";
import Banner from "@/images/banner/banner_tipps+tricks.jpg";
import { Link } from "@/components/Link/Link";
import { ButtonWrapper } from "@/components/ButtonWrapper";
import { AnleitungsVerzeichnis } from "@/components/AnleitungsVerzeichnis";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG Romanum - Tipps und Tricks",
  description:
    "Für den Einstieg gibt es hier tipps, tricks und Anleitungen gebündelt",
};

const tipps = () => (
  <>
    <PageIntro img={Banner}>
      <h2 className="mb-5">Tipps und Tricks</h2>
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <p>
            Salvete Rekruten und Neueinsteiger ins Römerhobby. In diesem Bereich
            befindet sich der von unserer Gruppe erarbeitete Wissensfundus. So
            haben wir beispielsweise einen bebilderten Anschaffungsratgeber.
            Dieser hilft, einen Überblick zu gewinnen, was welche Gegenstände in
            welcher Reihenfolge angeschafft werden sollten.
          </p>
          <ButtonWrapper to="/anschaffungsratgeber" className="my-3">
            Zum Anschaffungs
            <span className="d-inline-block d-md-none">
              -<br />
            </span>
            ratgeber
          </ButtonWrapper>
          <p>
            Bei vielen Gegenständen, die man als Römer braucht, lohnt es sich,
            diese selbst herzustellen. Ganz vorne mit dabei ist hier die Tunika
            zu nennen, aber auch komplexere Gegenstände wurden von unserer
            Gruppe bereits erstellt. Zu vielen Projekten gibt es auch
            Anleitungen, die dazu einladen sollen, sich selbst daran zu
            versuchen.
          </p>
          <p>
            Für alles, was man nicht selbst herstellen kann oder möchte
            empfehlen wir, auf der <Link href="/links">Link Seite</Link>{" "}
            nachzuschauen.
          </p>
        </div>
      </div>
    </PageIntro>
    <AnleitungsVerzeichnis />
  </>
);
export default tipps;
