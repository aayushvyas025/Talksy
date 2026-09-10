import React from "react";
import { Link } from "react-router-dom";

function NavLinks({ title, icon: Icon, to }) {
  return (
    <Link to={to} className="btn btn-sm gap-2 transition-colors">
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{title}</span>
    </Link>
  );
}

export default NavLinks;
