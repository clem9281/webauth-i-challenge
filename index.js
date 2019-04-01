const express = require("express");
const helmet = require("helmet");
const register = require("./routers/register");
const users = require("./routers/users");

const app = express();

app.use(express.json());
app.use(helmet());

app.get("/", (req, res) => res.send("<h1>WebAuth I</h1>"));
app.use("/api/register", register);
app.use("/api/users", users);

const port = process.env.PORT || 6500;
app.listen(port, console.log(`Server running on ${port}`));
