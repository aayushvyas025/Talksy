import React from "react";

function ProfileHeader({ title, subtitle }) {
  return (
    <div className="bg-base-300 rounded-xl p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-2">{subtitle}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;
