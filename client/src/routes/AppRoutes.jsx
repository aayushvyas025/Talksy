import { Navigate, Route, Routes } from "react-router-dom";
import {
  AuthPage,
  HomePage,
  NotFoundPage,
  ProfilePage,
  SettingPage,
} from "@/pages";
import useAuthStore from "@/store/auth/authStore";
import { useEffect } from "react";
import { AuthLoader } from "@/components";

function AppRoutes() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

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

  if (isCheckingAuth && !authUser) {
    return <AuthLoader />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={authUser ? <HomePage /> : <Navigate to="/authentication" />}
      />
      <Route path="/authentication" element={<AuthPage />} />
      <Route path="/settings" element={<SettingPage />} />
      <Route
        path="/user/profile"
        element={authUser ? <ProfilePage /> : <Navigate to="/authentication" />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
