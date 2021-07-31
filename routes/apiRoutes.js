const app = require("express").Router();
const db = require("../db/db.json");

app.get("/notes", (req, res) => {
  console.log("hello there");
  console.log(db);
  res.send(db);
});

// app.post(db);

module.exports = app;
