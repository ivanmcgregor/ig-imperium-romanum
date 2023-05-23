import { PageIntro } from "@/components/PageIntro/PageIntro";
import Banner from "@/images/banner/banner_kontakt2.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG Romanum - Kontakt",
  description: "Kontaktseite der IG Imperium Romanum",
};

const kontakt = () => (
  <PageIntro img={Banner}>
    <h2 className="mb-5">Kontakt</h2>
    <div className="row mb-4">
      <div className="col col-md-10 offset-md-1">
        Du hast Fragen zu unserer Truppe oder den vielen Anleitungen? Du hast
        Interesse an der Darstellung eines antiken Römers oder möchtest sogar
        mal bei einem Event bei unserer Gruppe reinschnuppern? Dann melde Dich
        einfach bei uns, wir heißen jeden herzlich willkommen!
      </div>
    </div>
    <div className="d-flex justify-content-around flex-wrap">
      <a href="mailto:ig-romanum@web.de" className="text-center">
        IG-Romanum@web.de
      </a>
      <a
        href="https://www.instagram.com/ig_imperiumromanum/"
        target="_blank"
        className="text-center"
      >
        IG Romanum auf Instagram
      </a>
      <a
        href="https://www.facebook.com/people/IG-Imperium-Romanum/100091977772885/"
        target="_blank"
        className="text-center"
      >
        IG Romanum auf Facebook
      </a>
    </div>
  </PageIntro>
);

export default kontakt;
