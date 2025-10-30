import React from "react";

function Button({ btnType="button", btnStyle, onClickHandler, btnText, btnIcon, btnDisabled }) {
  return (
    <button type={btnType} className={btnStyle} onClick={onClickHandler} disabled={btnDisabled}>
      {btnText || btnIcon}
    </button>
  );
}

export default Button;
