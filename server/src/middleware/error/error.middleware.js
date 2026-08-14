function setupErrorMiddleware(app) {
  app.use((error, request, response, next) => {
    response
      .status(500)
      .json({ success: false, message: "Internal server error" });
  });
}

export default setupErrorMiddleware; 