const app = require("express").Router();
const db = require("../db/db.json");

app.get("/notes", (req, res) => {
  console.log(db);
  res.json(db);
});

app.post(db);

module.exports = app;
