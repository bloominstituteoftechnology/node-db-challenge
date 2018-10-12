exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments(); // id
    tbl.
  });
};

exports.down = function(knex, Promise) {};
