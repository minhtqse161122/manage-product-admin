const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const flash = require("express-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const { connectDB } = require("./config/database");
const systemConfig = require("./config/system");
const clientRoutes = require("./routes/client/index.routes");
const adminRoutes = require("./routes/admin/index.routes");

require("dotenv").config();

const app = express();
connectDB(process.env.DB_CONNECTION_STRING);

//make method with right way
app.use(methodOverride("_method"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// config express flash
app.use(cookieParser("MYKEY"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
// end config express flash

// Config static file
app.use(express.static("public"));

// App.locals
app.locals.prefixAdmin = systemConfig.prefixAdmin;

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
