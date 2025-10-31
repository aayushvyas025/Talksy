import { MainLayout } from '../../layout'
import { useAuthStore } from '../../store'

function ProfilePage() {
const {authUser, isUpdatingProfile, updateUserProfile} =  useAuthStore();

async function handleUploadImage(event) {

}

  return (
    <MainLayout>
      <div className="h-screen pt-20"></div>
    </MainLayout>
  )
}

export default ProfilePage  

