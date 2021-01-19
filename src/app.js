const express = require("express");
require("./db/conn");

const User = require("./models/users");
const router = require("./routers/user_route");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to our Site");
});
app.use('/api', router);

app.listen(port);
