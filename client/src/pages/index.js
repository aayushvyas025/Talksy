import { lazy } from "react";

export const HomePage = lazy(() => import("./home/Home"));
export const AuthPage = lazy(() => import("./auth/Auth"));
export const ProfilePage = lazy(() => import("./Profile/Profile"));
export const SettingPage = lazy(() => import("./Setting/Setting"));
export const NotFoundPage = lazy(() => import("./not-found/NotFound"));
