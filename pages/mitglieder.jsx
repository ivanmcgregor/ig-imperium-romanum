import Head from "next/head";
import { attributes } from "../content/mitglieder.md";
import { PageIntro } from "../components/PageIntro/PageIntro";
import { Member } from "../components/Members/Member";
import MemberStyles from "../components/Members/styles.module.css";
import { Members } from "../components/Members/Members";

const { title, intro, img, members } = attributes;

const memberGroups = [];
const times = Math.ceil(members.length / 3);
for (let i = 0; i <= times; i++) {
  memberGroups.push(members.splice(0, 3));
}

const Mitglieder = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <PageIntro img={img}>
        <h2 className="mb-4 pb-4">{title}</h2>
        <p className="mb-4">{intro}</p>
      </PageIntro>
      <Members memberGroups={memberGroups} />
    </>
  );
};

export default Mitglieder;
