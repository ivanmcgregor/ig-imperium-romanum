import styles from "./styles.module.css";
import PropTypes from "prop-types";
import Link from "next/link";

export const Button = ({ to, children }) => {
  return (
    <Link href={to}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
};
