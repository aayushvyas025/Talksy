import { Navbar } from "@/components";
import React from "react";

function Layout({ children, styles }) {
  return (
    <main className={styles}>
      <Navbar /> 
      {children}
    </main>
  );
}

export default Layout;
