import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import schildBild from "@/images/schild.jpg";

type Routes = Array<{ path: string; name: string }>;
const primaryRoutes: Routes = [
  {
    path: "/mitglieder",
    name: "Mitglieder",
  },
  {
    path: "/galerie",
    name: "Galerie",
  },
  {
    path: "/hilfen",
    name: "Hilfen",
  },
  {
    path: "/links",
    name: "Links",
  },
];
const secondaryRoutes: Routes = [
  {
    path: "/termine",
    name: "Termine",
  },
  {
    path: "/videos",
    name: "Videos",
  },
  {
    path: "/kontakt",
    name: "Kontakt",
  },
  {
    path: "/datenschutz",
    name: "Datenschutz",
  },
];

const Routes = ({ routes }: { routes: Routes }) => {
  const { pathname } = useRouter();
  return (
    <>
      {routes.map(({ path, name }) => (
        <Link
          className={`${styles.link} pt-1 ${
            path === pathname && styles.linkActive
          }`}
          href={path}
          key={name}
        >
          {name}
        </Link>
      ))}
    </>
  );
};

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <div className={`${styles.footer} py-4 mt-4`}>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-2">
            <Image
              className={styles.image}
              src={schildBild}
              alt="Schild der IG Romanum"
            />
          </div>
          <div className="col-md-3">
            <Routes routes={primaryRoutes} />
          </div>
          <div className="col-md-3">
            <Routes routes={secondaryRoutes} />
          </div>
          <div className="col-md-4 text-end pt-1">
            <div className={styles.link}>© {year}, IG Imperium Romanum</div>
            <Link
              className={`${styles.link} pt-1`}
              href="https://www.youtube.com/@ig-imperiumromanum1879"
              target="_blank"
            >
              YouTube
            </Link>
            <Link
              className={`${styles.link} pt-1`}
              href="https://www.instagram.com/ig_imperiumromanum/"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              className={`${styles.link} pt-1`}
              href="https://www.facebook.com/people/IG-Imperium-Romanum/100091977772885/"
              target="_blank"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
