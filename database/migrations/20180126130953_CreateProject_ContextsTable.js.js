
exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('Project_Contexts', (table) => {

    table.integer('projectId').unsigned().references('id').inTable('Projects');
    table.integer('contextId').unsigned().references('id').inTable('Contexts');
    
  });
  
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTableIfExists('Project_Contexts');
  
};
