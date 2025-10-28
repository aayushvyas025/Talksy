import { Routes, Route } from "react-router-dom";
import Pages from "../../pages";

const {
  HomePage,
  LoginPage,
  SignupPage,
  NotFoundPage,
  SettingPage,
  ProfilePage,
} = Pages;

function MainRoutes() {
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
