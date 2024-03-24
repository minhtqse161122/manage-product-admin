const express = require("express");
const app = express();

require("dotenv").config();

const clientRoutes = require("./routes/client/index.routes");

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "pug");

// Routes
clientRoutes(app);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`App runing on port ${process.env.SERVER_PORT}`);
});
