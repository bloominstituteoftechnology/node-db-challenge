
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {
        table.increments().unique();
        table.string('description').notNullable();
        table.string('notes');
        table.integer('projects_id').unsigned()
        table.foreign('projects_id').references('id').on('projects');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists
    ('actions');
  };
