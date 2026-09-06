import { Route, Routes } from "react-router-dom";
import { AuthPage, HomePage, ProfilePage, SettingPage } from "@/pages";
import useAuthStore from "@/store/auth/authStore";
import { useEffect } from "react";

function AppRoutes() {
  const { authUser, checkAuth } = useAuthStore();

  async function handleAuthChecking() {
    try {
      const { success, message } = await checkAuth();
      if (!success) {
        console.error(message);
      }
    } catch (error) {
      console.error(`Error, checking auth: ${error.message}`);
      throw error;
    }
  }

  useEffect(() => {
    handleAuthChecking();
  }, []);
 
  console.log({authUser})
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/authentication" element={<AuthPage />} />
      <Route path="settings" element={<SettingPage />} />
      <Route path="/user/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default AppRoutes;
