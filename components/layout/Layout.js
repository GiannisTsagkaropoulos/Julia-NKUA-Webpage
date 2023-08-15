import MainNavigation from "./MainNavigation";

import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
