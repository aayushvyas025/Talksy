import React from "react";
import imagePlaceholder from "../../../public/avatar.png";

function ProfilePictureComponent({ message, authUser, selectedUser }) {
  return (
    <div className="chat-image avatar">
      <div className="size-10 rounded-full border">
        <img
          src={
            message.senderId === authUser._id
              ? authUser.profilePic || imagePlaceholder
              : selectedUser.profilePic || imagePlaceholder
          }
          alt="profile pic"
        />
      </div>
    </div>
  );
}

export default ProfilePictureComponent;
