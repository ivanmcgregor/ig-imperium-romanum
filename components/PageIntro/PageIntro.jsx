import PropTypes from "prop-types";
import styles from "./styles.module.css";

export const PageIntro = ({ children, img, isHome }) => {
  return (
    <div
      className={`${styles.intro} text-center ${!isHome && styles.introSmall}`}
    >
      <div className={styles.mosaic}></div>
      <div className={styles.marble1}>
        <div className={styles.offsetImage}>
          <div className="container">
            <img src={img} className={styles.imgCover} />
          </div>
        </div>
      </div>
      <div className={styles.marble2}>
        <div className="container">
          <div className={`borderBox ${styles.borderBox}`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

PageIntro.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  img: PropTypes.string.isRequired,
  isHome: PropTypes.bool,
};
PageIntro.defaultProps = {
  isHome: false,
};
