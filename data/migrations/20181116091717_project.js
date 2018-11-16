
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments()
    table.string('name')
    table.string('description')
    table.boolean('complete')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
