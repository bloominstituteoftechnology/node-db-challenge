exports.up = function(knex, Promise) {
    return knex.schema.createTable('Actions_Context', tbl => {
      tbl.increments();
  
      tbl
          .integer('actionsId').unsigned().references('id').inTable('Actions');
      tbl
          .integer('contextsId').unsigned().references('id').inTable('Contexts');
      tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Actions_Context');
  };
