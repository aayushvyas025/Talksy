import useAuthStore from "@/store/auth/authStore";
import React from "react";
import AppLogo from "../AppLogo/AppLogo";

function Navbar() {
  const { authUser, logoutUser } = useAuthStore();

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex justify-between items-center h-full">
          {/* Application logo */} 
           <AppLogo />
          {/* Navbar  */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
