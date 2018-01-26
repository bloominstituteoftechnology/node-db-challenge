
exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('Contexts', (table) => {

    table.increments('id').unsigned().unique();
    table.string('context', 128);

  });
  
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTableIfExists('Contexts');
  
};
