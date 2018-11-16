
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
      tbl.increments();
      tbl.string('name', 128);
      tbl.string('description', 528);
      tbl.boolean('Completion_Status')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
