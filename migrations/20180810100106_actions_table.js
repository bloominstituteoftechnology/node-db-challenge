
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', action => {
    action.increments()
    action.string('description')
    action.string('notes')
    action.boolean('completed').defaultTo(false)
    action.integer('project_id').references('id').inTable('project')
  });
};

exports.down = function(knex, Promise) {
  
};
