const helperFunctions = {
  validateForm: (formData) => {
    if (formData.fullName) {
      return `Fullname shoould be Required`;
    } else if (formData.email) {
      return `Email Should be Required`;
    } else if (formData.password) {
      return `Password Should be Required`;
    }
  },
};

export default helperFunctions;
