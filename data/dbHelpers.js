const db = require("./dbConfig");

const find = () => {
  return db("users");
};

const findBy = filter => {
  return db("users").where(filter);
};

const addUser = user => {
  return db("users").insert(user);
};

module.exports = {
  find,
  findBy,
  addUser
};
