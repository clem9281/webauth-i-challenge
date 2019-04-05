const express = require("express");
const helmet = require("helmet");
const users = require("./routers/users");
const auth = require("./routers/auth");
const session = require("express-session");
const sessionConfig = require("./routers/session-config");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(session(sessionConfig));

app.get("/", (req, res) => res.send("<h1>WebAuth I</h1>"));
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 6500;
app.listen(port, console.log(`Server running on ${port}`));
