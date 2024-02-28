const app = require("./app");
const connect = require("./Config/db");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;

dotenv.config();
//handle uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("shuting down server uncaught exception");
  process.exit(1);
});

const server = app.listen(port, async () => {
  await connect();
  console.log(`Server is Listening on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server because of unhandled error");
  server.close(() => {
    process.exit(1);
  });
});
