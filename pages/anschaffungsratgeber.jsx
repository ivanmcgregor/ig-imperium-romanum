import Head from "next/head";
import { attributes } from "../content/home.md";
import { PageIntro } from "../components/PageIntro/PageIntro";
import { Section } from "../components/Section/Section";
import { Button } from "../components/Button/Button";

const { title, intro, img } = attributes;

const Home = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <PageIntro img={img}>
        <h2 className="mb-4 pb-4">{title}</h2>
        <p className="spacedParagraph mb-4">{intro}</p>
      </PageIntro>
      <Section title={"events"}>
        <div>Platzhalter</div>
        <div className="row mb-4 mt-4">
          <div className="col-md-6 offset-md-3">
            <Button to="/galerie">{"Platzhalter"}</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
