import { PageIntro } from "@/components/PageIntro/PageIntro";

import Banner from "@/images/banner/banner_termine.jpg";
import { Events } from "@/components/Events/Events";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "IG Romanum - Termine",
  description:
    "Termine und Veranstaltungen bei denen die IG Imperium Romanum ist",
};

const termine = () => (
  <>
    <Head>
      <title>IG Romanum - Termine</title>
      <meta
        name="description"
        content="Termine und Veranstaltungen bei denen die IG Imperium Romanum ist"
      />
      <meta
        name="keywords"
        content="Termine, Veranstaltungen, IG Romanum, Römer, Reenactment, Legionär, Auxiliar, Geschichte, Living History"
      />
      <meta name="author" content="IG Romanum" />
      <meta property="og:title" content="IG Romanum - Termine" />
      <meta
        property="og:description"
        content="Termine und Veranstaltungen bei denen die IG Imperium Romanum ist"
      />
      <meta property="og:image" content="/images/banner/banner_termine.jpg" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="IG Romanum - Termine" />
      <meta
        name="twitter:description"
        content="Termine und Veranstaltungen bei denen die IG Imperium Romanum ist"
      />
      <meta name="twitter:image" content="/images/banner/banner_termine.jpg" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.ig-romanum.de/termine" />
    </Head>

    <PageIntro img={Banner}>
      <h2 className="mb-5">
        Termine und Veranstal
        <span className="d-inline-block d-md-none">
          -<br />
        </span>
        tungen
      </h2>
      <div className="row mb-4">
        <div className="col col-md-10 offset-md-1">
          Hier könnt ihr alle kommenden Termine sehen, bei denen wir entweder in
          vollem Glanz als Besucher, oder als Lagerer mit allem drum und dran zu
          sehen sein werden.
        </div>
      </div>
    </PageIntro>

    <Events />
  </>
);

export default termine;
