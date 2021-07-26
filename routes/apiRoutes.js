const app = require("express").Router();
const db = require("../db/db.json");

app.get("/notes", (req, res) => {
  console.log(db);
  res.json(db);
});

module.exports = app;
