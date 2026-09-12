import React from "react";
import UserImage from "../Image/UserImage";
import ImageInput from "../ImageInput/ImageInput";

function ProfileAvatar({ source, isUpdating, onChange }) {

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <UserImage source={source} />
        <ImageInput onChange={onChange} disabled={isUpdating} />
       </div>
        <p className="text-small text-zinc-400">
          {isUpdating
            ? "Uploading...."
            : "Click the camera icon to Update your photo"}
        </p>
    </div>
  );
}

export default ProfileAvatar;
