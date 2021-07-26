// link JS file
// log notes taken
// require Express
//

const express = require("express");
const html = require("./routes/htmlRoutes.js");
const appi = require("./routes/apiRoutes.js");

const app = express();
const PORT = 3001;

app.use(express.static("public"));

app.use("/", html);
app.use("/api", appi);

// app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

// app.get('/send', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/send.html'))
// );

// app.get('/paths', (req, res) =>
//   res.sendFile(path.join(__dirname, '/paths.html'))
// );

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

//html

//API
