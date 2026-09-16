import { Navbar } from "@/components";
import React from "react";

function Layout({ children, styles }) {
  return (
    <main className={`min-h-screen ${styles}`}>
      <Navbar /> 
      {children}
    </main>
  );
}

export default Layout;
