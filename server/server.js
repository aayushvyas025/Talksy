import express from "express";
import connectToDatabase from "#config/database/database.config";
import envVariables from "#constant/envs.constant";
import setupCommonMiddleware from "#middleware/common/common.middleware";
import setupRoutesMiddleware from "#middleware/routes/routes.middleware";
import setupErrorMiddleware from "#middleware/error/error.middleware";

const { backendPort } = envVariables;

const app = express();

setupCommonMiddleware(app); 
setupRoutesMiddleware(app); 
setupErrorMiddleware(app); 

connectToDatabase()
  .then(() => {
    app.listen(backendPort, () => {
      console.log(
        `Your server is up and running on port http://localhost:${backendPort}`,
      );
    });
  })
  .catch((error) => {
    console.log(`Error, while connecting with database ${error.message}`);
  });
