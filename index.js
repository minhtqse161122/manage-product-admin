const express = require("express");
const app = express();
const port = 3000;

const clientRoutes = require("./routes/client/index.routes");

app.set("views", "./views");
app.set("view engine", "pug");

// Routes
clientRoutes(app);

app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});
