import API from "@/config/axiosConfig";
import apiRoutes from "@/constant/apiRoutes";
import { create } from "zustand";

const { CHECK_AUTH } = apiRoutes.auth;

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
      console.log(data);
      set({ authUser: data.user });

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
}));

export default useAuthStore;
