exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
      tbl.increments();

      tbl.string('name', 255).notNullable().unique('name');
      tbl.string('description', 255).notNullable();
      tbl.boolean('completed').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
