const express = require("express");
const app = express();
const path = require("path");
const host = "localhost";
const port = 8000;

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/nametovar.html"));
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
