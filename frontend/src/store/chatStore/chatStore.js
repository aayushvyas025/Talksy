import { create } from "zustand";
import { commonConstant, helperFunctions } from "../../helper";
import { API } from "../../config";
import useAuthStore from "../authStore/authStore";

const { handleApi } = helperFunctions;
const { apis } = commonConstant;

const { messagesEndPoint } = apis;
const { handleApiError } = handleApi;

const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUsers: null,
  isUserLoading: false,
  isMessagesLoading: false,
  setSelectedUser: (selectedUser) => set({ selectedUser }),
  getUsersFromDB: async () => {
    set({ isUserLoading: true });
    try {
      const response = await API.get(messagesEndPoint.GET_USERS);
      set({ users: response?.data?.filteredUsers });
    } catch (error) {
      console.error(`Error While Fetching  Users: ${error.message}`);
      handleApiError(error?.response?.data?.message);
    } finally {
      set({ isUserLoading: false });
    }
  },
  getUsersMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const response = await API.get(messagesEndPoint.GET_MESSAGES(userId));
      set({ messages: response?.data?.messages });
    } catch (error) {
      console.error(`Error While Fetching Messages: ${error.message}`);
      handleApiError(error?.response?.data?.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },
  sendMessages: async (newMsge) => {
    const { messages, selectedUser } = get();
    try {
      const response = await API.post(
        messagesEndPoint.CREATE_MESSAGES(selectedUser._id),
        newMsge
      );
      set({ messages: [...messages, response?.data?.newMessage] });
    } catch (error) {
      console.error(`Error While Sending Messages: ${error.message}`);
      handleApiError(error?.response?.data?.message);
    }
  },
  subscribeToMessages: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    const socket = useAuthStore.getState().socket;
    socket.on("newMessage", (newMessage) => {
      const isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id;
      if (!isMessageSentFromSelectedUser) return;

      set({
        messages: [...get().messages, newMessage],
      });
    });
  },
 unsubscribeFromMessages: () => {
  const socket = useAuthStore.getState().socket;
  if (!socket) return;
  socket.off("newMessage");
}
}));

export default useChatStore;
