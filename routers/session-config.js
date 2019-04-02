const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const dbConfig = require("../data/dbConfig");

module.exports = {
  name: "cooooookie",
  secret: "it's a secret",
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: dbConfig,
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: "true",
    clearInterval: 1000 * 60 * 30
  })
};
