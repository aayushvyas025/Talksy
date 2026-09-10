import { create } from "zustand";
import API from "@/config/axiosConfig";
import apiRoutes from "@/constant/apiRoutes";

const {
  CHECK_AUTH,
  SIGNUP_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_PROFILE,
  DELETE_USER,
} = apiRoutes.auth;

const useAuthStore = create((set) => ({
  authUser: null,
  error: null,
  isUserDeleted: false,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isLoggingOut: false,
  checkAuth: async () => {
    set({ error: null, isCheckingAuth: true });
    try {
      const { data } = await API.get(CHECK_AUTH);
      set({ authUser: data?.user, error: null });

      return { success: true, message: "User authenticated", user: data.user };
    } catch (error) {
      const message = error.response?.data?.message || "Authentication failed";
      console.error(
        `Error, while fetching user authenticated: ${error.message}`,
      );
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
      const message = error.response?.data?.message || "Signup user failed";
      console.error(`Error, while signup user: ${error.message}`);
      set({ error: message, authUser: null });
      return { success: false, message, newUser: null };
    } finally {
      set({ isSigningUp: false });
    }
  },
  loginUser: async ({ email, password }) => {
    set({ isLoggingIn: true, error: null });
    try {
      const { data } = await API.post(LOGIN_USER, { email, password });
      set({ authUser: data?.user, error: null });
      return { success: true, message: data.message, user: data?.user };
    } catch (error) {
      const message = error.response?.data?.message || "Login user failed";
      console.error(`Error, while login user: ${error.message}`);
      set({ error: message, authUser: null });
      return { success: false, message, user: null };
    } finally {
      set({ isLoggingIn: false });
    }
  },
  logoutUser: async () => {
    set({ isLoggingOut: true, error: null });
    try {
      const { data } = await API.post(LOGOUT_USER);
      set({ authUser: null, error: null });
      return { success: true, message: data.message, user: null };
    } catch (error) {
      const message = error.response?.data?.message || "Logout user failed";
      console.error(`Error, while logout user: ${error.message}`);
      set({ error: message, authUser: null });
      return { success: false, message, user: null };
    } finally {
      set({ isLoggingOut: false });
    }
  },
  updateProfile: async (profilePicture) => {
    set({ isUpdatingProfile: true, error: null });
    try {
      const { data } = await API.put(UPDATE_PROFILE, { profilePicture });
      set((state) => ({
        authUser: state.authUser
          ? { ...state.authUser, profilePicture: data?.profilePicture }
          : null,
        error: null,
      }));
      return {
        success: true,
        message: data.message,
        profilePic: data?.profilePicture,
      };
    } catch (error) {
      const message =
        error?.response?.data?.message || "Error, updating profile";
      console.error(`Error, while updating profile: ${error.message}`);
      set({ error: message, authUser: null });
      return { success: false, message, authUser: null };
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
  userAccountDelete: async () => {
    set({ error: null, isUserDeleted: true });
    try {
      const { data } = await API.delete(DELETE_USER);
      set({ authUser: null, error: null });
      return {
        success: true,
        message: data.message || "Account deleted successfully",
        user: null,
      };
    } catch (error) {
      const message = error.response?.data?.message || "Error, deleting user";
      console.error(`Error, while deleting user: ${error.message}`);
      set({ error: message, authUser: null });
      return { success: false, message, user: null };
    } finally {
      set({ isUserDeleted: false });
    }
  },
}));

export default useAuthStore;
