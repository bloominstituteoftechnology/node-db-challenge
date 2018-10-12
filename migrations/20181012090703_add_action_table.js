
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(actions){
      actions.increments();
      actions.integer('project_id').unsigned().notNullable().references('id').inTable('projects');
      actions.string('description');
      actions.string('notes');
      actions.boolean('completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
