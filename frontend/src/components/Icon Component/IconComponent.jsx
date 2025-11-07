import React from "react" 

export default function IconComponent({ icon, iconSize , iconStyle = "" }) {
  return React.createElement(icon, {
    style: { width: `${iconSize * 4}px`, height: `${iconSize * 4}px` },
    className: iconStyle,
  });
}

