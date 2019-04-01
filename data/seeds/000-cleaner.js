const cleaner = require("knex-cleaner");

// just to clean the table once I fill it with junk
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return cleaner.clean(knex);
};
