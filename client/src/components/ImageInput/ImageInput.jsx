import { Camera } from "lucide-react";
import React from "react";

function ImageInput({ onChange, disabled }) {
  return (
    <label
      htmlFor="avatar-upload"
      className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full transition-all duration-200 ${disabled && "animate-pulse pointer-events-none"}`}
    >
      <Camera className="h-5 w-5 text-base-200" />
      <input
        type="file"
        id="avatar-upload"
        className="hidden"
        accept="image/*"
        onChange={onChange}
        disabled={disabled}
      />
    </label>
  );
}

export default ImageInput;
