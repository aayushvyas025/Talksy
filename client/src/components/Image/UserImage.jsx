import React from "react";
import imagePlaceholder from "@/assets/user.png";

function UserImage({ source }) {
  return (
    <img
      src={source || imagePlaceholder}
      alt={"User Profile"}
      className={`size-28 rounded-full object-cover border-4 ${imagePlaceholder && "bg-white"}`}
    />
  );
}

export default UserImage;
