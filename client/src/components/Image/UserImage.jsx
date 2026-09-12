import React from "react";
import imagePlaceholder from "@/assets/user.png";

function UserImage({ source, imgAlt }) {
  return (
    <img
      src={source || imagePlaceholder}
      alt={imgAlt}
      className={`size-32 rounded-full object-cover border-4 ${imagePlaceholder && "bg-white"}`}
    />
  );
}

export default UserImage;
