
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {
        table.increments();
        table.string('description').notNullable();
        table.string('notes');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists
    ('actions');
  };
