import Styles from "./styles.module.css";
import { Member } from "./Member";
import PropTypes from "prop-types";

export const Members = ({ memberGroups }) => {
  return (
    <>
      {memberGroups.map((m, i) => (
        <div className={Styles.mosaic} key={i}>
          <div className="container">
            <div className="row" key={i}>
              {m.map((member) => (
                <div className="col-md-4 mb-3" key={member.name}>
                  <Member
                    name={member.name}
                    img={member.img}
                    text={member.text}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

Members.propTypes = {
  memberGroups: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    )
  ),
};
