const startupDebugger = require("debug")("app:startup");
const express = require("express");
const helmet = require("helmet");

const app = express();
const home = require("./routes/home");

app.set("view engine", "pug");

app.use("/", home);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const port = process.env.PORT || 4000;
app.listen(port, () => startupDebugger(`Listening on port ${port}...`));
