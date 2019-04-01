const express = require("express");
const helmet = require("helmet");
const register = require("./routers/register");

const app = express();

app.use(express.json());
app.use(helmet());

app.get("/", (req, res) => res.send("<h1>WebAuth I</h1>"));
app.use("/api/register", register);

const port = process.env.PORT || 6500;
app.listen(port, console.log(`Server runnin on ${port}`));
