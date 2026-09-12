import React from "react";
import UserImage from "../Image/UserImage";
import ImageInput from "../ImageInput/ImageInput";

function ProfileAvatar({ source, isUpdating }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <UserImage source={source} />
        <ImageInput onChange={onChange} disabled={isUpdating} />
      </div>
    </div>
  );
}

export default ProfileAvatar;
