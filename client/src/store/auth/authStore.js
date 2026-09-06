import API from "@/config/axiosConfig";
import apiRoutes from "@/constant/apiRoutes";
import { create } from "zustand";

const { CHECK_AUTH, SIGNUP_USER } = apiRoutes.auth;

const useAuthStore = create((set) => ({
  authUser: null,
  error: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  checkAuth: async () => {
    set({ error: null, isCheckingAuth: true });
    try {
      const { data } = await API.get(CHECK_AUTH);
      set({ authUser: data?.user, error:null });

      return { success: true, message: "User authenticated", user: data.user };
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Authentication failed";
      console.error(`Error, while fetching user authenticated: ${message}`);
      set({
        error: message,
        authUser: null,
      });

      return { success: false, message, user: null };
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signupUser: async ({ fullName, email, password }) => {
    set({ isSigningUp: true, error: null });
    try {
      const { data } = await API.post(SIGNUP_USER, {
        fullName,
        email,
        password,
      });
      set({ authUser: data?.newUser, error: null });
      return { success: true, message: data.message, newUser: data?.newUser };
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Signup user failed";
      console.error(`Error, while signup user: ${message}`);
      set({ error: message, authUser: null });
      return { success: false, message, newUser: null };
    } finally {
      set({ isSigningUp: false });
    }
  },
}));

export default useAuthStore;
