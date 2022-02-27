import Head from "next/head";
import { attributes, react as Content } from "../content/datenschutz.md";
import { PageIntro } from "../components/PageIntro/PageIntro";
import SectionStyles from "../components/Section/SectionHeadline.module.css";

const { title, intro, img } = attributes;

const Datenschutz = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <PageIntro img={img}>
        <h2 className="mb-4 pb-4">{title}</h2>
        <p className="spacedParagraph mb-4">{intro}</p>
      </PageIntro>
      <div className={`container ${SectionStyles.sectionHeadline}`}>
        <Content />
      </div>
    </>
  );
};

export default Datenschutz;
