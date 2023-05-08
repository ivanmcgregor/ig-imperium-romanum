import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const routes = [
  { path: "/", name: "STARTSEITE" },
  { path: "/tipps", name: "TIPPS" },
  { path: "/galerie", name: "GALERIE" },
  { path: "/videos", name: "VIDEOS" },
  { path: "/mitglieder", name: "MITGLIEDER" },
  { path: "/termine", name: "TERMINE" },
  { path: "/kontakt", name: "KONTAKT" },
];

export const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const { pathname } = useRouter();

  return (
    <nav>
      <div className={styles.banner}>
        <div className={styles["banner-mosaik"]}></div>
        <h1 className={styles.hero}>
          <Link href="/">IG IMPERIUM ROMANUM</Link>
        </h1>
      </div>
      <div className={styles.mainnav}>
        <button className={styles.toggle} onClick={toggleCollapsed}>
          Menü
        </button>
        <div className={`${styles.collapse} ${collapsed && styles.collapsed}`}>
          <ul className={styles.navElements}>
            {routes.map(({ name, path }) => (
              <li
                key={name}
                className={`${styles.navitem} ${
                  path === pathname && styles.active
                }`}
              >
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
