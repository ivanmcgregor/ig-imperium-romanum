import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";

import Banner from "@/images/banner/banner_videos.jpeg";
import { YouTube } from "@/components/Video/YouTube";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "IG Romanum - Videos",
  description: "Ausgewählte Videos der IG Imperium Romanum",
};

const Home = () => {
  return (
    <>
      <Head>
        <title>IG Romanum - Videos</title>
        <meta
          name="description"
          content="Ausgewählte Videos der IG Imperium Romanum zu Ausrüstung, Vorstellung und Dokus."
        />
        <meta
          name="keywords"
          content="Videos, IG Romanum, Römisches Reenactment, Ausrüstung, Dokumentation, YouTube"
        />
        <meta name="author" content="IG Romanum" />
        <meta property="og:title" content="IG Romanum - Videos" />
        <meta
          property="og:description"
          content="Ausgewählte Videos der IG Imperium Romanum zu Ausrüstung, Vorstellung und SWR-Dokumentation."
        />
        <meta property="og:image" content="/images/banner/banner_videos.jpeg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IG Romanum - Videos" />
        <meta
          name="twitter:description"
          content="Ausgewählte Videos der IG Imperium Romanum zu Ausrüstung, Vorstellung und SWR-Dokumentation."
        />
        <meta name="twitter:image" content="/images/banner/banner_videos.jpeg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ig-romanum.de/videos" />
      </Head>

      <PageIntro img={Banner}>
        <p className="spacedParagraph mb-4">
          Wir erstellen Videos, um etwa als Vorstellung der Gruppe, von
          Ausrüstung oder zur Belustigung. Außerdem war die Gruppe in einer
          Dokumentation des SWR gut zu sehen.
        </p>
      </PageIntro>
      <Section title="YouTube">
        <YouTube
          title="Promo Video"
          url="https://www.youtube-nocookie.com/embed/ZGqYsotdZ8o"
        />
        <YouTube
          title="Geschichte aus dem Lager"
          url="https://www.youtube-nocookie.com/embed/mC1wZhdvWFE"
        />
      </Section>
      <Section title="SWR Doku">
        <p className="spacedParagraph mb-4">
          Im Winter 2022 waren wir mit einem Filmteam des SWR unterwegs. Sie
          haben uns dabei gefilmt wie wir Querstreben an unsere Helme befestigt
          haben und waren bei unserer Winterwanderung auf dem Donnersberg dabei.
          Die volle Doku ist bis April 2025{" "}
          <a href="https://www.ardmediathek.de/video/parallelwelten/ich-ziehe-in-die-schlacht/swr/Y3JpZDovL3N3ci5kZS9hZXgvbzE4MzYwODY">
            in der ARD Mediathek
          </a>{" "}
          verfügbar.
        </p>
      </Section>
    </>
  );
};

export default Home;
