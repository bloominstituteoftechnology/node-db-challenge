exports.up = function(knex, Promise) {
  return knex.schema.raw('PRAGMA foreign_keys = ON;');
};

exports.down = function(knex, Promise) {};
