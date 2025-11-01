import React from "react";
import IconComponent from "../Icon/IconComponent";
import { Camera } from "lucide-react";

function AvatarImageComponent({
  imageSrc,
  imageTitle = "Profile",
  updtProfileState,
  onChangeHandler,
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <img
          src={imageSrc}
          alt={imageTitle}
          className="size-32 rounded-full object-cover border-4 "
        />
        <label
          htmlFor="avatar-upload"
          className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${updtProfileState ? "animate-pulse pointer-events-none" : ""}
                `}
        >
          <IconComponent icon={Camera} iconSize={5} iconStyle="text-base-200" />
          <input
            type="file"
            id="avatar-upload"
            className="hidden"
            accept="image/*"
            onChange={onChangeHandler}
            disabled={updtProfileState}
          />
        </label>
      </div>
      <p className="text-sm text-zinc-400">
        {updtProfileState
          ? "Uploading..."
          : "Click the camera icon to update your photo"}
      </p> 
      
    </div>
  );
}

export default AvatarImageComponent;
