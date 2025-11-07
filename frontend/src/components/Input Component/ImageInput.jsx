import { forwardRef } from "react";

const ImageInput = forwardRef(
  (
    {
      type = "file",
      accept = "image/*",
      inputStyling = "hidden",
      onChangeHandler,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        accept={accept}
        className={inputStyling}
        onChange={onChangeHandler}
      />
    );
  }
);

export default ImageInput;
