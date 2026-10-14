const config = require("./constants/config.constant");
const ConfigDatabase = require("./config/database/database.config");
const app = require("./app");

async function mainServer() {
  try {
    await ConfigDatabase.connect();

    app.listen(config.port, () => {
      console.log(
        `Your server is up and running on http://localhost:${config.port}`,
      );
    });
  } catch (error) {
    console.error(`Error, while setup server: ${error.message}`);
    process.exitCode = 1;
  }
}

mainServer();
