import toast from "react-hot-toast";

const helperFunctions = {
  validations: {
    validateSignupForm: (formData) => {
      if (!formData.fullName.trim()) {
        return toast.error("Full Name is Required");
      }
      if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
        return toast.error("Email Should be Required");
      }
      if (!formData.password.trim()) {
        return toast.error("Password Should be Required");
      }
      if (formData.password.length < 6) {
        return toast.error("Password must be at least 6 characters");
      }

      return true;
    },
    validateLoginForm: (formData) => {
      if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
        return toast.error("Email Should be Required");
      }
      if (!formData.password.trim()) {
        return toast.error("Password Should be Required");
      }
      if (formData.password.length < 6) {
        return toast.error("Password must be at least 6 characters");
      }

      return true;
    }
  },
  handleApi: {
    handleApiSuccess:(success) => {
      toast.success(success)
    },
    handleApiError:(error) => {
      toast.error(error)
    }
  },
  imageHandling: {
    handleImageChange:(event) => {},
    removeImageHandler:() => {}
  }
};

export default helperFunctions;
