
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.text('description').notNullable();
    tbl.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.dropTableIfExists('projects');
};
