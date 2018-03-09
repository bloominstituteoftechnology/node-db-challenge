exports.up = function(knex, Promise) {
    return knex.schema.createTable('Project_Actions', tbl => {
      tbl.increments();
  
      tbl
          .integer('projectId').unsigned().references('id').inTable('Projects');
      tbl
          .integer('actionId').unsigned().references('id').inTable('Actions');
      tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Project_Actions');
  };
