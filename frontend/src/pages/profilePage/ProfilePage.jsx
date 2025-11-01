import { AvatarImageComponent, UserInfoComponent } from "../../components";
import { MainLayout } from "../../layout";
import { useAuthStore } from "../../store";
import imagePlaceHolder from "../../../public/avatar.png";
import { Mail, User } from "lucide-react";
function ProfilePage() {
  const { authUser, isUpdatingProfile, updateUserProfile } = useAuthStore();

  const { authenticatedUser } = authUser;

  async function handleUploadImage(event) {
    event.preventDefault();
  }

  return (
    <MainLayout>
      <div className="h-screen pt-20">
        <div className="max-w-2xl mx-auto p-4 py-8">
          <div className="bg-base-300 rounded-xl p-6 space-y-8">
            <div className="text-center">
              <div className="text-2xl font-semibold">Profile</div>
              <p className="mt-2">Your Profile Information</p>
            </div>
            <AvatarImageComponent
              imageSrc={authenticatedUser.profilePic || imagePlaceHolder}
              updtProfileState={isUpdatingProfile}
              onChangeHandler={handleUploadImage}
            />
            <div className="space-y-6">
              <UserInfoComponent
                userTitle={"FullName"}
                userInfo={authenticatedUser?.fullName}
                icon={User}
                iconSize={4}
              />
              <UserInfoComponent userTitle={"Email"} userInfo={authenticatedUser?.email} iconSize={4} icon={Mail} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProfilePage;
