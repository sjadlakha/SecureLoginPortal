var express = require("express");

var app = express();
app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.listen(3000);
