import React from "react";
import { Route, Routes } from "react-router-dom";

function mainRoutes() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" />
      <Route path="/register" />
      <Route path="settings" />
      <Route path="/user/profile" />
    </Routes>
  );
}

export default mainRoutes;
