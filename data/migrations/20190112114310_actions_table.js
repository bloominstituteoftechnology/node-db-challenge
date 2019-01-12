
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Project-Actions', table => {
      table.increments();
      table.string('description').notNullable();
      table.string('notes_column');
      table.boolean('completed').notNullable();
      table.integer('Project_id').notNullable().unsigned();
      table.foreign('Project_id').references('id').on('Projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Project-Actions');
};
