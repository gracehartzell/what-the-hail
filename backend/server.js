const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const User = require("./models/user");

const app = express();

app.use(morgan("short"));
app.use(bodyParser.json());
app.use(express.static("public"));
app.disable("x-powered-by");

app.post("/index", User.signup);

app.listen(PORT, () => {
  console.log(`Welcome to the safest port, ${PORT}, in the storm.`); // eslint-disable-line
});
