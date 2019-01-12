
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function (table) {
        table.increments();
        table.string('description').notNullable();
        table.string('notes', 500).notNullable();
        table.boolean('isCompleted').notNullable();
    });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('projects');
};
