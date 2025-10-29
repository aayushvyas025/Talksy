import React from "react";

function Button({ btnType="button", btnStyle, onClickHandler, btnText, btnIcon }) {
  return (
    <button type={btnType} className={btnStyle} onClick={onClickHandler}>
      {btnText || btnIcon}
    </button>
  );
}

export default Button;
