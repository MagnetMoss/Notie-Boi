const express = require("express");
const html = require("./routes/htmlRoutes.js");
const appi = require("./routes/apiRoutes.js");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", appi);
app.use("/", html);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

//html

//API
