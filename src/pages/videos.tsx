import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Section } from "@/components/Section/Section";

import Banner from "@/images/banner/banner_videos.jpeg";
import { YouTube } from "@/components/Video/YouTube";
import { Swr } from "@/components/Video/Swr";

const Home = () => {
  return (
    <>
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
        <p className="spacedParagraph mb-4">
          Hier ist eine Minimalfassung für eilige vom SWR:
        </p>
        <Swr />
      </Section>
    </>
  );
};

export default Home;
