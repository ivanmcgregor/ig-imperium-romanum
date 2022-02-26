import Head from "next/head";
import { attributes } from "../content/kontakt.md";
import { PageIntro } from "../components/PageIntro/PageIntro";
import { Link } from "../components/Link/Link";

const { title, intro, img, email } = attributes;

const Kontakt = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <PageIntro img={img}>
        <h2 className="mb-4 pb-4">{title}</h2>
        <p className="spacedParagraph mb-4">{intro}</p>
        <Link href={`mailto:${email}`} className="text-center">
          {email}
        </Link>
      </PageIntro>
    </>
  );
};

export default Kontakt;
