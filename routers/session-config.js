const session = require("express-session");

module.exports = {
  name: "cooooookie",
  secret: "it's a secret",
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false
};
