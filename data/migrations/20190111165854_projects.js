
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table =>{
      table.increments('id');
      table.string('name').notNullable();
      table.string('description').notNullable();
      table.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
