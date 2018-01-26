
exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('Action_Contexts', (table) => {

    table.integer('actionId').unsigned().references('id').inTable('Actions');
    table.integer('contextId').unsigned().references('id').inTable('Contexts');
    
  });
  
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTableIfExists('Action_Contexts');
  
};
