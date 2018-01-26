
exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('Actions', (table) => {

    table.increments('id').unsigned().unique();
    table.string('description', 255);
    table.string('notes', 255);
    table.boolean('completed').defaultTo(false);

    table.integer('projectId').unsigned().references('id').inTable('Projects');

  });
  
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTableIfExists('Actions');
  
};
