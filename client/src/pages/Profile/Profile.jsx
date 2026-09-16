import { AuthUserInfo, ProfileAvatar, ProfileHeader } from "@/components";
import DeleteAccount from "@/components/DeleteAccount/DeleteAccount";
import UserDeleteDialog from "@/components/UserDeleteDialog/UserDeleteDailog";
import Layout from "@/Layout/Layout";
import useAuthStore from "@/store/auth/authStore";
import { showErrorToast } from "@/utils/toasts/toasts";
import { validateUserInput } from "@/utils/validations/inputValidation";
import React, { Suspense, useState } from "react";

function Profile() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const {
    authUser,
    isUpdatingProfile,
    updateProfile,
    isUserDeleted,
    userAccountDelete,
  } = useAuthStore();

  async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
    if (file.size > MAX_FILE_SIZE) {
      showErrorToast("Profile picture must be smaller than 2 MB");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async function () {
      const base64Image = reader.result;
      const { success, field } = validateUserInput(
        base64Image,
        "Profile Picture",
      );
      if (!success) {
        showErrorToast(field);
        return;
      }
      await updateProfile(base64Image);
    };
  }
  return (
    <Suspense>
      <Layout styles={"pt-20"}>
        {isAlertOpen && (
          <UserDeleteDialog
            onClose={() => setIsAlertOpen(!isAlertOpen)}
            isDeleting={isUserDeleted}
            handleDelete={userAccountDelete}
          />
        )}
        <div className="max-w-2xl mx-auto p-4 py-8">
          <div className="bg-base-300 rounded-xl p-6 space-y-8">
            <ProfileHeader
              title={"Profile"}
              subtitle={"Your profile information"}
            />
            <ProfileAvatar
              source={authUser?.profilePicture}
              isUpdating={isUpdatingProfile}
              onChange={handleImageUpload}
            />
            <AuthUserInfo user={authUser} />
            <DeleteAccount handleAlert={() => setIsAlertOpen(!isAlertOpen)} />
          </div>
        </div>
      </Layout>
    </Suspense>
  );
}

export default Profile;
