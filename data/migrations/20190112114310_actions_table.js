
exports.up = function(knex, Promise) {
  knex.schema.createTable('Project-Actions', table => {
      table.increments();
      table.string('description').notNullable();
      table.string('notes_column');
      table.boolean('completed').notNullable();
      
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('Project-Actions');
};
