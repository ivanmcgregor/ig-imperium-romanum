import { galleries, GalleryType } from "@/data/galerien";
import { PageIntro } from "@/components/PageIntro/PageIntro";
import { GalleryImages } from "@/components/GalleryImages/GalleryImages";

export async function getStaticPaths() {
  const paths = galleries.map(({ link }) => ({
    params: { slug: link },
  }));

  return { paths, fallback: false };
}

function getGalleryBySlug(slug: string) {
  const link = slug.toLowerCase();
  return galleries.find((g) => g.link.toLowerCase() === link);
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const gallery = getGalleryBySlug(params.slug);

  // Pass post data to the page via props
  return { props: { gallery } };
}

const Gallery = ({ gallery }: { gallery: GalleryType }) => {
  return (
    <>
      <PageIntro img={`/Galerien/${gallery.folder}/${gallery.coverFoto}`}>
        <h2 className="mb-5">{gallery.title}</h2>
        <div className="row mb-4">
          <div className="col col-md-10 offset-md-1">{gallery.description}</div>
        </div>
      </PageIntro>
      <GalleryImages {...gallery} />
    </>
  );
};

export default Gallery;
