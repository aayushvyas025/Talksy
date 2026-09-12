import { AuthUserInfo, ProfileAvatar, ProfileHeader } from "@/components";
import Layout from "@/Layout/Layout";
import useAuthStore from "@/store/auth/authStore";
import React, { Suspense } from "react";

function Profile() {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();

  async function handleImageUpload(event) {}
  return (
    <Suspense>
      <Layout styles={"h-screen pt-20"}>
        <div className="max-w-2xl mx-auto p-4 py-8">
          <div className="bg-base-300 rounded-xl p-6 space-y-8">
            <ProfileHeader
              title={"Profile"}
              subtitle={"Your profile information"}
            />
            <ProfileAvatar
              source={authUser?.profilePicture}
              isUpdating={isUpdatingProfile}
            />
          <AuthUserInfo user={authUser} />
          </div>
        </div>
      </Layout>
    </Suspense>
  );
}

export default Profile;
