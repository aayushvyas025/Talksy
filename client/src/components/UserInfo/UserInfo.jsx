import React from "react";

function UserInfo({ title, info, icon: Icon }) {
  return (
    <div className="space-y-1.5">
      <div className="text-sm text-zinc-400 flex items-center gap-2">
        <Icon className="w-4 h-4" /> {title}
      </div>
      <p className="py-2.5 px-4 bg-base-200 rounded-lg border">{info}</p>
    </div>
  );
}

export default UserInfo;
