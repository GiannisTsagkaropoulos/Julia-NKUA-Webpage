import MainNavigation from "./MainNavigation";

import { Fragment } from "react";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="mx-auto w-90 max-w-40">{props.children}</main>
    </div>
  );
}

export default Layout;
