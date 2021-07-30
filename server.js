const html = require("./routes/htmlRoutes.js");
const appi = require("./routes/apiRoutes.js");

const app = express();
const PORT = 3001;

app.use(express.static("public"));

app.use("/", html);
app.use("/api", appi);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

//html

//API
