const db = require("./dbConfig");

const find = () => {
  return db("users");
};

const findById = filter => {
  return db("users").where(filter);
};

module.exports = {
  find
};
