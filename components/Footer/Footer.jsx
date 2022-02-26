import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const primaryRoutes = [
  {
    path: "/galerie",
    name: "Galerie",
  },
  {
    path: "/mitglieder",
    name: "Mitglieder",
  },
  {
    path: "/hilfen",
    name: "Hilfen",
  },
];
const secondaryRoutes = [
  {
    path: "/termine",
    name: "Termine",
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

const mapRoutes = ({ path, name }, pathname) => (
  <Link href={path} key={name}>
    <a
      className={`${styles.link} pt-1 ${
        path === pathname && styles.linkActive
      }`}
    >
      {name}
    </a>
  </Link>
);

const year = new Date().getFullYear();

export const Footer = () => {
  const { pathname } = useRouter();
  return (
    <div className={`${styles.footer} py-4 mt-4`}>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-2">
            <img className={styles.image} src="/assets/schild.jpg"></img>
          </div>
          <div className="col-md-3">
            {primaryRoutes.map((route) => mapRoutes(route, pathname))}
          </div>
          <div className="col-md-3">
            {secondaryRoutes.map((route) => mapRoutes(route, pathname))}
          </div>
          <div className="col-md-4 text-end pt-1">
            © {year}, IG Imperium Romanum
          </div>
        </div>
      </div>
    </div>
  );
};
