require("dotenv").config();

const config = Object.freeze({
  port: process.env.PORT || 3001,
  api: {
    prefix: "/talksy/api",
    version: 1,
  },
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
  cors: {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  },
});

module.exports = config;
