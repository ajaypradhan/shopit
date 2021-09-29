const app = require("./app");
const dotenv = require("dotenv");

// setting config file
dotenv.config({ path: "./config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(
    `server started at PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});