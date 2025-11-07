import React from "react";
import Button from "../Button/Button";
import { X } from 'lucide-react';

function ImagePreviewComponent({ imagePreview, removeImageHandler }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <div className="relative">
        <img
          src={imagePreview}
          alt={"Preview"}
          className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
        />
        <Button
          onClickHandler={removeImageHandler}
          btnStyle={
            "absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300 flex items-center justify-center"
          }
        >
            <X/>
        </Button>
      </div>
    </div>
  );
}

export default ImagePreviewComponent;
