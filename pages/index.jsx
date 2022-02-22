import Head from "next/head";
import { attributes } from "../content/home.md";
import { PageIntro } from "../components/PageIntro/PageIntro";
import { Section } from "../components/Section/Section";
import { Button } from "../components/Button/Button";
import { TeaserButton } from "../components/Button/TeaserButton";
import { EventPreview } from "../components/Events/Preview";

const {
  title,
  intro,
  img,
  introG,
  introM,
  events,
  eventsLink,
  claim,
  claimText,
  tips,
  tipsAR,
  tipsArImg,
  tipsBA,
  tipsBaImg,
} = attributes;

const Home = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <PageIntro img={img} isHome={true}>
        <h2 className="mb-4 pb-4">{title}</h2>
        <p className="mb-4">{intro}</p>
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3">
            <Button to="/galerie">{introG}</Button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3">
            <Button to="/mitglieder">{introM}</Button>
          </div>
        </div>
      </PageIntro>
      <Section title={events}>
        <EventPreview />
        <div className="row mb-4 mt-4">
          <div className="col-md-6 offset-md-3">
            <Button to="/galerie">{eventsLink}</Button>
          </div>
        </div>
      </Section>
      <Section title={claim}>
        <p>{claimText}</p>
      </Section>
      <Section title={tips}>
        <div className="row mb-4 mt-4">
          <div className="col-md-6">
            <TeaserButton to="/anschaffungsratgeber" img={tipsArImg}>
              {tipsAR}
            </TeaserButton>
          </div>
          <div className="col-md-6">
            <TeaserButton to="/anleitungen" img={tipsBaImg}>
              {tipsBA}
            </TeaserButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
