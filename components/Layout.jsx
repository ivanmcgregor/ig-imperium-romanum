import PropTypes from "prop-types";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.defaultProps = {};
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
