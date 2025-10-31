import { create } from "zustand";
import { API } from "../../config";
import { commonConstant } from "../../helper";
import toast from "react-hot-toast";

const { apis,envVariables } = commonConstant;
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
      set({ authUser: response.data });
    } catch (error) {
      set({ authUser: null });
      console.error(`Error While Checking Auth: ${error.message}`);
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signupUser:async(signupData) => {
    set({isSigningUp:true});
    try {
      const response = await API.post(auth.SIGNUP_USER,signupData); 
      console.log(response)
      set({authUser:response?.data?.user}); 
      toast.success("User Signup Successfully");
     
    } catch (error) { 
      set({isSigningUp:false});
      console.error(`Error While Signup User: ${error.message}`); 
      toast.error(error.response?.data?.message); 
    }finally {
      set({isSigningUp:false});
    }
  },
  logoutUser:async() => {
    try {
      const response = await API.post(auth.LOGOUT_USER); 
      set({authUser:null});
      toast.success("User Logout Successfully"); 
    } catch (error) {
      console.error(`User Logout Successfully ${error.message}`);
      toast.error(response.data.message)
      
    }
  }
}));

export default useAuthStore;
