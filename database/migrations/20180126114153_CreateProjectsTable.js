
exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('Projects', (table) => {

    table.increments('id').unsigned().unique();
    table.string('name', 128);
    table.string('description', 255);
    table.boolean('completed').defaultTo(false);

  });
  
};

exports.down = function(knex, Promise) {
  
  return knex.schema.dropTableIfExists('Projects');

};
