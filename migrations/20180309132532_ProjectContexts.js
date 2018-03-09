exports.up = function(knex, Promise) {
  return knex.schema.createTable('Project_Contexts', tbl => {
    tbl.increments();

    tbl
        .integer('actionId').unsigned().references('id').inTable('Actions');
    tbl
        .integer('contextId').unsigned().references('id').inTable('Contexts');
    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Project_Contexts');
};
