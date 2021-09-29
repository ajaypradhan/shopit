const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

// setting config file
dotenv.config({ path: "backend/config/config.env" });

// connecting to DATABASE
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `server started at PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
