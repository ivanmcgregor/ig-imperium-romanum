import { PageIntro } from "@/components/PageIntro/PageIntro";
import { AnleitungsVerzeichnis } from "@/components/AnleitungsVerzeichnis";

import Banner from "@/images/banner.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitungen",
  description: "Übersichtsseite mit allen Anleitungen",
};

const Anleitungen = () => {
  return (
    <>
      <PageIntro img={Banner}>
        <h2 className="mb-4 pb-4">Anleitungen</h2>
        <div className="row mb-4">
          <div className="col-md-10 offset-md-1">
            Hier sind all unsere Anleitungen aufgelistet.
          </div>
        </div>
      </PageIntro>
      <AnleitungsVerzeichnis />
    </>
  );
};

export default Anleitungen;
