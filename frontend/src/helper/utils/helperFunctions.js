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
    handleImageChange:(event, imageCallback) => {
      const file = event.target.files[0];
      if(!file.type.startsWith("image/")){
        toast.error("Please Select and Image File");
        return; 
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        imageCallback(reader.result);

      };

      reader.readAsDataURL(file);
    },
    removeImageHandler:(imagePreviewCB, fileInput) => {
      imagePreviewCB(null); 
      if(fileInput.current) {
        fileInput.current.value = ""
      }
    }
  }
};

export default helperFunctions;
