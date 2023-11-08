const express = require("express");
const routes = require("./routes");
const app = express();
app.use((req, res, next) => {
  next();
});
app.use((req, res, next) => {
  res.send("<h1>hello from Express</h1>");
});

app.listen(5000);
