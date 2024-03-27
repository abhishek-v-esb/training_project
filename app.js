const express = require("express");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const port = 8007;

const registration = require("./routes/registration");
const JSroutes = require("./routes/JSprojectRoutes");
const CSSroutes = require("./routes/CSSprojectRoutes");
const EXP1 = require("./routes/ExpressRoutes/EXP1.grid.route.js");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", registration);
app.use("/", JSroutes);
app.use("/", CSSroutes);
app.use("/EXP1", EXP1);

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
