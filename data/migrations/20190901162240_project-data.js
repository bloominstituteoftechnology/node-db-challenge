
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.text('name', 100).notNullable();
      tbl.boolean('completed');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};
