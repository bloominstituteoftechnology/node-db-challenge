exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', (table) => {
    table.increments();
    table.text('description').notNullable();
    table.text('notes');
    table.boolean('completed');
    table.integer('project_id')
         .references('id')
         .inTable('projects')
         .onUpdate('CASCADE')
         .onDelete('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
