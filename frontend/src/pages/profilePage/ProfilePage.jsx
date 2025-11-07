import {
  AvatarImageComponent,
  UserInfoComponent,
} from "../../components";
import { MainLayout } from "../../layout";
import { useAuthStore } from "../../store";
import imagePlaceHolder from "/avatar.png";
import { Mail, User } from "lucide-react";
import { useState } from "react";
function ProfilePage() {
  const { authUser, isUpdatingProfile, updateUserProfile } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState(null);

  async function handleUploadImage(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateUserProfile({ profilePic: base64Image });
    };
  }


  return (
    <MainLayout>
      <div className="h-screen-full pt-20">
        <div className="max-w-2xl mx-auto p-4 py-8">
          <div className="bg-base-300 rounded-xl p-6 space-y-8">
            <div className="text-center">
              <div className="text-2xl font-semibold">Profile</div>
              <p className="mt-2">Your Profile Information</p>
            </div>
            <AvatarImageComponent
              imageSrc={
                selectedImage || authUser?.profilePic || imagePlaceHolder
              }
              updtProfileState={isUpdatingProfile}
              onChangeHandler={handleUploadImage}
            />
            <div className="space-y-6">
              <UserInfoComponent
                userTitle={"FullName"}
                userInfo={authUser.fullName}
                icon={User}
                iconSize={4}
              />
              <UserInfoComponent
                userTitle={"Email"}
                userInfo={authUser.email}
                iconSize={4}
                icon={Mail}
              />
            </div>
            <div className="mt-6 bg-base-300 rounded-xl p-6">
              <h2 className="text-lg font-medium  mb-4">Account Information</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                  <span>Member Since</span>
                  <span>{authUser?.createdAt?.split("T")[0]}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>Account Status</span>
                  <span className="text-green-500">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProfilePage;
