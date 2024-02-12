import Footer from "../footer";
import Header from "../header";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <Header float={props.float ?? true} />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
