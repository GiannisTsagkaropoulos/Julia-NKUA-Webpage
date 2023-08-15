import MainNavigation from "./MainNavigation";

import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className="mx-auto w-90 max-w-40 mb-24">{props.children}</main>
    </Fragment>
  );
}

export default Layout;
