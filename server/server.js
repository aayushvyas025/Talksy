import express from "express";
import connectToDatabase from "#config/database/database.config";
import envVariables from "#constant/envs.constant";

const { backendPort } = envVariables;

const app = express();

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
