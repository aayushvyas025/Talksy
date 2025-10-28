
import { lazy } from "react"; 
const HomePage = lazy(() => import("./Home/HomePage")); 
const SignupPage = lazy(() => import("./signup/SignupPage")); 
const SettingPage = lazy(() => import("./Settings/SettingPage"));
const LoginPage = lazy(() => import("./login/LoginPage")); 
const ProfilePage = lazy(() => import("./profilePage/ProfilePage")); 
const NotFoundPage = lazy(() => import("./NotFound/NotFoundPage")); 

const Pages = {HomePage, SignupPage, SettingPage,LoginPage, ProfilePage, NotFoundPage }
export default Pages; 
