import { create } from "zustand";

const useUserStore = create((set) => ({
  users: [],
  userId: null,
  isLoading: false,
  error: null,
  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
    } catch (error) {
      const message = error.response?.data?.message || "Error, fetching users";
      console.error(`Error, while fetching user: ${error.message}`);
      set({ error: message, users: null });
      return { success: false, message, users: null };
    } finally {
      set({ isLoading: false });
    }
  },
  fetchUserById: async (userId) => {
    set({ isLoading: true, error: null });
    try {
    } catch (error) {
      const message = error.response?.data?.message || "Error, fetching userId";
      console.error(`Error, while fetching userId: ${error.message}`);
      set({ error: message, userId: null });
      return { success: false, message, userId: null };
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUserStore;
