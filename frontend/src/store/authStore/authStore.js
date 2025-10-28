import { create } from "zustand";
import { API } from "../../config";
import { commonConstant } from "../../helper";

const { apis } = commonConstant;
const { auth } = apis;

const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  checkAuth: async () => {
    try {
      const response = await API.get(auth.USER_AUTHENTICATED);
      console.log(response);
      set({ authUser: response.data });
    } catch (error) {
      set({ authUser: null });
      console.error(`Error While Checking Auth: ${error.message}`);
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));

export default useAuthStore;
