
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', project => {
    project
      .increments()
      .string('name')
      .string('description')
      .boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  
};
