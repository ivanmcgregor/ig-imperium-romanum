import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const routes = [
  { path: "/", name: "STARTSEITE" },
  { path: "/galierie", name: "GALERIE" },
  { path: "/mitglieder", name: "MITGLIEDER" },
  { path: "/termine", name: "TERMINE" },
  { path: "/kontakt", name: "KONTAKT" },
];

export const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    console.log("__collapsed", collapsed);
    setCollapsed(!collapsed);
  };
  const { pathname } = useRouter();

  return (
    <nav>
      <div className={styles.banner}>
        <div className={styles["banner-mosaik"]}></div>
        <h1 className={styles.hero}>
          <Link href="/">
            <a>IG IMPERIUM ROMANUM</a>
          </Link>
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
                <Link href={path}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
