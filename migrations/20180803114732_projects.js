
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
     table.increments();
     table.string('name').notNullable();
     table.string('description').notNullable();
     table.boolean('completed').notNullable();
     table.integer('actions_id').notNullable().references('id').inTable('actions');
  });
};
 exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
