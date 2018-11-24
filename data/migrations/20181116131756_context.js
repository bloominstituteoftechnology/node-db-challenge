exports.up = function(knex, Promise) {
  return knex.schema.createTable("contexts", tbl => {
    tbl.increments();
    tbl.string("context");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("contexts");
};
