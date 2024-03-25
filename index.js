const express = require("express");
const clientRoutes = require("./routes/client/index.routes");
const { connectDB } = require("./config/database");

require("dotenv").config();

const app = express();
connectDB(process.env.DB_CONNECTION_STRING);

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "pug");

// Routes
clientRoutes(app);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`App runing on port ${process.env.SERVER_PORT}`);
});
