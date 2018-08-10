
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', project => {
    project.increments()
    project.string('name')
    project.string('description')
    project.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  
};
