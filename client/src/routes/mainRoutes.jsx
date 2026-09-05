import { AuthPage, HomePage, ProfilePage, SettingPage } from "@/pages";
import React from "react";
import { Route, Routes } from "react-router-dom";

function mainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/authentication" element={<AuthPage />} />
      <Route path="settings" element={<SettingPage />} />
      <Route path="/user/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default mainRoutes;
