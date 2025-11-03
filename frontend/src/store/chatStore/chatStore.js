import { create } from "zustand";
import { commonConstant, helperFunctions } from "../../helper";
import { API } from "../../config";

const { handleApi } = helperFunctions;
const { apis } = commonConstant;

const { messages } = apis;
const { handleApiSuccess, handleApiError } = handleApi;

const useChatStore = create((set) => ({
  messages: [],
  users: [],
  selectedUsers: null,
  isUserLoading: false,
  isMessagesLoading: false,
  setSelectedUser:(selectedUser) => set({selectedUser}),
  getUsersFromDB: async () => {
    set({ isUserLoading: true });
    try {
     const response = await API.get(messages.GET_USERS);
     set({users:response?.data?.filteredUsers});
    } catch (error) {
      console.error(`Error While Fetching  Users: ${error.message}`);
      handleApiError(error?.response?.data?.message);
    } finally {
      set({ isUserLoading: false });
    }
  },
  getUsersMessages: async(userId) => {
    set({isMessagesLoading : true}); 
    try {
        const response = await API.get(messages.GET_MESSAGES(userId)); 
        console.log(response);  
        set({messages : response?.data?.messages});
    } catch (error) { 
        console.error(`Error While Fetching Messages: ${error.message}`); 
        handleApiError(error?.response?.data?.message);      
    }finally {
        set({isUserLoading : false}); 
    }
  },
}));

export default useChatStore;
