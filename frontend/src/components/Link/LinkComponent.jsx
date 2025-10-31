import React from "react";
import { Link } from "react-router-dom";
import IconComponent from "../Icon/IconComponent";

function LinkComponent({
  href,
  linkStyle,
  linkIcon,
  linkIconSize,
  linkText,
  linkIconStyle,
}) {
  return (
    <Link to={href} className={linkStyle}>
      <IconComponent
        icon={linkIcon}
        iconSize={linkIconSize}
        iconStyle={linkIconStyle}
      />
      <span className="hidden sm:inline">{linkText}</span>
    </Link>
  );
}

export default LinkComponent;
