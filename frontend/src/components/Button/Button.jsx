import React from "react";

function Button({ btnType="button", btnStyle, onClickHandler, btnText, btnIcon, btnDisabled, children }) {
  return (
    <button type={btnType} className={btnStyle} onClick={onClickHandler} disabled={btnDisabled}>
      {btnText || btnIcon}
      {children}
    </button>
  );
}

export default Button;
