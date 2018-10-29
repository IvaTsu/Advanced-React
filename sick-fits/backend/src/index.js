require("dotenv").config();

const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// TODO: Use Express.js middleware to handle cookies (JWT)
// TODO: Use Express.js middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  callback => {
    console.log(`Server started on https://localhost:${callback.port}`);
  }
);
