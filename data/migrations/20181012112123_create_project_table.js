
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (t) => {
    t.increments();
    t.string('name', 128).notNullable().unique('name');
    t.string('description', 255).notNullable().unique('description');
    t.boolean('completed').defaultTo(false).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
