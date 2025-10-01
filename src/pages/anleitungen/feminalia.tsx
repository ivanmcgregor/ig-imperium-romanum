import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";
import Banner from "@/images/banner.jpg";
import Feminalia from "@/images/anleitungen/nicos_feminalia.jpg";
import { AnleitungsBild } from "@/components/AnleitungsBild/AnleitungsBild";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "IG Romanum - Anleitung Feminalia",
  description:
    "Anleitung zum schneidern einer einfachen römischen Hose (Feminalia)",
};
const feminalia = () => (
  <>
    <Head>
      <title>IG Romanum - Anleitung Feminalia</title>
      <meta
        name="description"
        content="Anleitung zum schneidern einer einfachen römischen Hose (Feminalia)."
      />
      <meta
        name="keywords"
        content="Feminalia, Römer, Reenactment, IG Romanum, Anleitung, Kleidung, Hose, Ausrüstung"
      />
      <meta name="author" content="IG Romanum" />
      <meta property="og:title" content="IG Romanum - Anleitung Feminalia" />
      <meta
        property="og:description"
        content="Anleitung zum schneidern einer einfachen römischen Hose (Feminalia)."
      />
      <meta property="og:image" content="/images/banner.jpg" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="IG Romanum - Anleitung Feminalia" />
      <meta
        name="twitter:description"
        content="Anleitung zum schneidern einer einfachen römischen Hose (Feminalia)."
      />
      <meta name="twitter:image" content="/images/banner.jpg" />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href="https://www.ig-romanum.de/anleitungen/feminalia"
      />
    </Head>
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
