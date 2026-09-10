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

  useEffect(() => {
    const { success, message } = checkAuth();
    if (!success) {
      console.error(message);
    }
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return <AuthLoader />;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          authUser ? <HomePage /> : <Navigate to="/authentication" replace />
        }
      />

      <Route
        path="/authentication"
        element={authUser ? <Navigate to="/" replace /> : <AuthPage />}
      />

      <Route path="/settings" element={<SettingPage />} />

      <Route
        path="/user/profile"
        element={
          authUser ? <ProfilePage /> : <Navigate to="/authentication" replace />
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
