
exports.up = function(knex) {
  return knex.schema
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.text("name")
    .notNullable();
    tbl.text('description', 300)
  })
};

exports.down =  function(knex) {
  return knex.schema
  .dropTableIfExists('resources');
};
