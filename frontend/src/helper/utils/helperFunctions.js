import toast from "react-hot-toast";

const helperFunctions = {
  validateForm: (formData) => {
    if (!formData.fullName.trim()) {
      return toast.error("Full Name is Required");
    } 
    if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      return toast.error("Email Should be Required");
    } 
     if (!formData.password.trim()) {
      return toast.error("Password Should be Required");
    }
    if(formData.password.length < 6) {
      return toast.error("Password must be at least 6 characters"); 
    }

    return true; 
  },
};

export default helperFunctions;
