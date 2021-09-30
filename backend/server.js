const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

// setting config file
dotenv.config({ path: "backend/config/config.env" });

// connecting to DATABASE
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server started at PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

// handel unHandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR : ${err.message}`);
  console.log("Shutting down server due to unhandledRejection");
  server.close(() => {
    process.exit(1);
  });
});
