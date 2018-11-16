exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    // Primary Key
    table.increments('id');
    // Name - required
    table.string('name', 255).notNullable();
    // Description - required
    table.text('description').notNullable();
    // Complete Flag
    table.boolean('complete');
  });
};

exports.down = function(knex, Promise) {};
