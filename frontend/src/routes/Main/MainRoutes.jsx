import { Routes, Route, Navigate } from "react-router-dom";
import Pages from "../../pages";
import { useAuthStore } from "../../store";
import { useEffect } from "react";
import { LoaderComponent } from "../../components";

const {
  HomePage,
  LoginPage,
  SignupPage,
  NotFoundPage,
  SettingPage,
  ProfilePage,
} = Pages;

function MainRoutes() {
  const {checkAuth, authUser, isCheckingAuth} = useAuthStore(); 
  useEffect(() => {
    checkAuth(); 
  }, []); 

  if(isCheckingAuth && !authUser) {
    return <LoaderComponent sizeOf={10} />
  }

  return (
    <Routes>
      <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
      <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to="/" />} />
      <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to='/'/>} />
      <Route path="/settings" element={<SettingPage />  } />
      <Route path="/profile" element={authUser ?  <ProfilePage /> : <Navigate to="/login" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MainRoutes;
