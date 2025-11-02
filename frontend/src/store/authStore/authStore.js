import { create } from "zustand";
import { API } from "../../config";
import { commonConstant, helperFunctions } from "../../helper";


const { apis } = commonConstant;
const { auth } = apis;
const {handleApi} = helperFunctions;
const {handleApiSuccess, handleApiError} = handleApi; 

const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  checkAuth: async () => {
    try {
      const response = await API.get(auth.USER_AUTHENTICATED);
      set({ authUser: response?.data?.authenticatedUser });
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
      set({authUser:response?.data?.user}); 
      handleApiSuccess("User Signup Successfully");
     
    } catch (error) { 
      set({isSigningUp:false});
      console.error(`Error While Signup User: ${error.message}`); 
      handleApiError(error.response?.data?.message); 
    }finally {
      set({isSigningUp:false});
    }
  },
  loginUser:async(loginData) => {
    set({isLoggingIn:true});
    try {
      const response = await API.post(auth.LOGIN_USER, loginData); 
      set({authUser:response?.data?.loginUser});
      handleApiSuccess("User Login Successfully");
    } catch (error) {
      console.error(`Error While Login User ${error.message}`);
      handleApiError(error?.response?.data?.message);
      set({authUser:null})
    }finally{
      set({isLoggingIn:false})
    }
  },
  logoutUser:async() => {
    try {
       await API.post(auth.LOGOUT_USER); 
      set({authUser:null});
      handleApiSuccess("User Logout Successfully"); 
    } catch (error) {
      console.error(`User Logout Successfully ${error.message}`);
      handleApiError(response.data.message)
      
    }
  },
  updateUserProfile:async (userData) => {
    set({isUpdatingProfile:true}); 
    try {
      const response = await API.put(auth.UPDATE_PROFILE, userData);
      set({authUser:response?.data?.updatedUser})
      handleApiSuccess("User Update Profile Succesfully");
    } catch (error) {
      console.error(`Error While Updating User Profile ${error.message}`);
      handleApiError(error?.response?.data?.message) 
    }finally {
      set({isUpdatingProfile : false})
    }
  }
}));

export default useAuthStore;
