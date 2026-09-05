import { Route, Routes } from "react-router-dom";
import { AuthPage, HomePage, ProfilePage, SettingPage } from "@/pages";

function AppRoutes() {
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
