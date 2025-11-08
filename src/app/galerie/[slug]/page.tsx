import { galleries } from "@/data/galerien";
import { PageIntro } from "@/components/PageIntro/PageIntro";
import { GalleryImages } from "@/components/GalleryImages/GalleryImages";

export async function generateStaticParams() {
  return galleries.map(({ link }) => ({ slug: link }));
}

function getGalleryBySlug(slug: string) {
  const link = slug.toLowerCase();
  return galleries.find((g) => g.link.toLowerCase() === link);
}

const Gallery = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const gallery = getGalleryBySlug(slug)!;

  return (
    <>
      <PageIntro
        img={`/Galerien/${gallery.folder}/${gallery.coverFoto}`}
        imgAlt={gallery.coverDescription}
      >
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
