const commonConstant = {
  envVariables: {
    backendUrl:
      import.meta.env.VITE_FRONTEND_MODE === "development"
        ? import.meta.env.VITE_BACKEND_URL
        : "/api/v1",
  },
  apis: {
    
  }
};

export default commonConstant;
