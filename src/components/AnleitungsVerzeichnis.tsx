import { LinkImage } from "@/components/LinkImage/LinkImage";
import { Section } from "@/components/Section/Section";

const anleitungen: Array<{ path: string; text: string }> = [
  "cingulum",
  "feminalia",
  "focale",
  "hamata",
  "penula",
  "schuhe",
  "scutum",
  "segmentata",
  "subarmalis",
  "tunika",
].map((e) => ({ text: e, path: `/anleitungen/${e}` }));
export const AnleitungsVerzeichnis = () => {
  return (
    <Section title="Anleitungen und Infos">
      <div className="row">
        {anleitungen.map(({ text, path }) => (
          <div className="col-12 col-md-6" key={text}>
            {/* The images should have the same name as the page and be in the*/}
            {/* folder `public/AnleitungsBilder` and in `.jpg format.*/}
            <LinkImage bgImage={`/AnleitungsBilder/${text}.jpg`} href={path}>
              {text}
            </LinkImage>
          </div>
        ))}
      </div>
    </Section>
  );
};
