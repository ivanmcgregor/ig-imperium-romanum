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
        <Swr />
      </Section>
    </>
  );
};

export default Home;
