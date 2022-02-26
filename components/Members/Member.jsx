import styles from "./styles.module.css";
import PropTypes from "prop-types";

export const Member = ({ img, name, text }) => {
  return (
    <>
      <div
        className={`borderBox ${styles.borderBox} d-flex justify-content-center`}
      >
        <h3 className={`mb-0 align-self-center ${styles.headline}`}>{name}</h3>
      </div>
      <div className={styles.spacing}>
        <div className={styles.imgOverflow}>
          <img className={styles.image} src={img} />
        </div>
        <p className="my-3">{text}</p>
      </div>
    </>
  );
};

Member.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
