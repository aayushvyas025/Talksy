const mongoose = require("mongoose");
const config = require("../../constants/config.constant");

async function configDatabase() {
  const { mongodb } = config;
  if (!mongodb.uri) throw new Error("MONGODB URI is required");
  try {
    const db = await mongoose.connect(mongodb.uri);

    console.log(
      `Database connected successfully, mongodb host-name:${db.connection.host}`,
    );
  } catch (error) {
    console.error(`Error, while setup database connection: ${error.message}`);
    process.exit(1);
  }
}

module.exports = configDatabase;
