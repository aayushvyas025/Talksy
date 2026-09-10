import React from "react";

function Button({ children, title, onClick, style }) {
  return (
    <button onClick={onClick} className={style}>
      {title}
      {children}
    </button>
  );
}

export default Button;
