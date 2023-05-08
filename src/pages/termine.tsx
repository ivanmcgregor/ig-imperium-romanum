import { PageIntro } from "@/components/PageIntro/PageIntro";

import Banner from "@/images/banner/banner_termine.jpg";
import { Events } from "@/components/Events/Events";
const termine = () => (
  <>
    <PageIntro img={Banner}>
      <h2 className="mb-5">Termine und Veranstaltungen</h2>
      <div className="row mb-4">
        <div className="col col-md-10 offset-md-1">
          Hier könnt ihr alle kommenden Termine sehen, bei denen wir entweder in
          vollem Glanz als Besucher, oder als Lagerer mit allem drum und dran zu
          sehen sein werden.
        </div>
      </div>
    </PageIntro>

    <Events />
  </>
);

export default termine;
