import { PageIntro } from "@/components/PageIntro/PageIntro";
import { AnleitungsVerzeichnis } from "@/components/AnleitungsVerzeichnis";

import Banner from "@/images/banner/banner_tipps+tricks.jpg";
import Head from "next/head";

const Anleitungen = () => {
  return (
    <>
      <Head>
        <title>IG Romanum - Anleitungen</title>
        <meta
          name="description"
          content="Übersichtsseite mit allen Anleitungen"
        />
        <meta
          name="keywords"
          content="Anleitungen, IG Romanum, Römer, Reenactment, Legionär, Auxiliar, Geschichte, Living History"
        />
        <meta name="author" content="IG Romanum" />
      </Head>

      <PageIntro
        img={Banner}
        imgAlt="Bild von einer Rüstung vor Bearbeitung (links) und einer nach Bearbeitung (rechts)"
      >
        <h2 className="mb-4 pb-4">Anleitungen</h2>
        <div className="row mb-4">
          <div className="col-md-10 offset-md-1">
            Hier sind all unsere Anleitungen und Informationen zu diversen
            Ausrüstungsgegenständen aufgelistet.
          </div>
        </div>
      </PageIntro>

      <AnleitungsVerzeichnis />
    </>
  );
};

export default Anleitungen;
