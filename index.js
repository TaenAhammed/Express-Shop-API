const startupDebugger = require("debug")("app:startup");
const express = require("express");

const app = express();
const home = require("./routes/home");

app.set("view engine", "pug");

app.use("/", home);

const port = process.env.PORT || 4000;
app.listen(port, () => startupDebugger(`Listening on port ${port}...`));
