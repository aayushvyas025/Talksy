import React from "react";

function Layout({ children, styles }) {
  return <main className={styles}>{children}</main>;
}

export default Layout;
