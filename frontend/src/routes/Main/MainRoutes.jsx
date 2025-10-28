import { Routes, Route } from "react-router-dom";
import Pages from "../../pages";
import { useAuthStore } from "../../store";
import { useEffect } from "react";

const {
  HomePage,
  LoginPage,
  SignupPage,
  NotFoundPage,
  SettingPage,
  ProfilePage,
} = Pages;

function MainRoutes() {
  const {checkAuth, isCheckingAuth} = useAuthStore(); 
  useEffect(() => {
    checkAuth(); 
  }, [])
  return (
    <Routes>
      <Route index="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/settings" element={<SettingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MainRoutes;
