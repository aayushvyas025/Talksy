import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import { Mail, User } from "lucide-react";
import UserAccountInfo from "../UserAccountInfo/UserAccountInfo";

function AuthUserInfo({ user }) {
  return (
    <div className="space-y-6">
      <UserInfo title={"Full Name"} info={user.fullName} icon={User} />
      <UserInfo title={"Email"} info={user.email} icon={Mail} />
      <UserAccountInfo user={user} />
    </div>
  );
}

export default AuthUserInfo;
