import PropTypes from "prop-types";
import styles from "./styles.module.css";

export const Section = ({ title, useAlternateHeadlineFont, children }) => {
  return (
    <div className={styles.section}>
      <div className={`${styles.mosaic} mb-4`}>
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <div className="borderBox">
                <h2
                  className={`${styles.sectionHeading} ${
                    useAlternateHeadlineFont && styles.alternateFont
                  }`}
                >
                  {title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">{children}</div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  useAlternateHeadlineFont: PropTypes.bool,
};

Section.defaultProps = {
  useAlternateHeadlineFont: false,
};
