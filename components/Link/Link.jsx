import Styles from "./styles.module.css";

export const Link = ({ href, children, className }) => (
  <a href={href} className={`${Styles.link} ${className}`}>
    {children}
  </a>
);
