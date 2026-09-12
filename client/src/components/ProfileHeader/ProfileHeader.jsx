import React from "react";

function ProfileHeader({ title, subtitle }) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2">{subtitle}</p>
    </div>
  );
}

export default ProfileHeader;
