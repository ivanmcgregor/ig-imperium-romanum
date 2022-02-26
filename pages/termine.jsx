import Head from "next/head";
import { attributes } from "../content/terminSeite.md";
import { PageIntro } from "../components/PageIntro/PageIntro";
import { Section } from "../components/Section/Section";
import { Button } from "../components/Button/Button";
import { Events } from "../components/Events/Events";

const { title, intro, img } = attributes;

const Termine = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <PageIntro img={img}>
        <h2 className="mb-4 pb-4">{title}</h2>
        <p className="spacedParagraph mb-4">{intro}</p>
      </PageIntro>
      <Events></Events>
    </>
  );
};

export default Termine;
