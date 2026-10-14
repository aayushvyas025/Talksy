const mongoose = require("mongoose");
const config = require("../../constants/config.constant");

class ConfigDatabase {
  static async connect() {
    const { mongodb } = config;

    if (!mongodb.uri) throw new Error("MONGODB URI is required");
    try {
      const db = await mongoose.connect(mongodb.uri);

      console.log(
        `Database connected successfully, mongodb host-name:${db.connection.host}`,
      );

      return db; 
    } catch (error) {
      console.error(
        `Error, while setup database connection: ${error instanceof Error ? error.message : error}`,
      );
       throw error;
    }
  }

  static async disconnect() {
    try {
      await mongoose.disconnect();
      console.log(`Database disconnected successfully`);
    } catch (error) {
      console.error(
        `Error, while disconnect the database: ${error instanceof Error ? error.message : error}`,
      );
        throw error;
    }
  }
}

module.exports = ConfigDatabase;
