const express = require("express");
const clientRoutes = require("./routes/client/index.routes");
const adminRoutes = require("./routes/admin/index.routes");
const { connectDB } = require("./config/database");

require("dotenv").config();

const app = express();
connectDB(process.env.DB_CONNECTION_STRING);

// Config static file
app.use(express.static("public"));
// End config static file

// Config Template Engines
app.set("views", "./views");
app.set("view engine", "pug");
// End config Template Engines

// Routes
clientRoutes(app);
adminRoutes(app);
// End routes

app.listen(process.env.SERVER_PORT, () => {
  console.log(`App runing on port ${process.env.SERVER_PORT}`);
});
