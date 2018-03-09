
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gtd', table => {
    table.increments();
    table.integer('projectId').unsigned().references('id').inTable('projects');
    table.integer('actionsId').unsigned().references('id').inTable('actions');
    table.integer('contextsId').unsigned().references('id').inTable('contexts');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gtd');
};
