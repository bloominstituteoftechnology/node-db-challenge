
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function(tbl) {
      tbl.increments();
      tbl.string('name', 255);
      tbl.string('description', 255)
      tbl.boolean('completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project')
};
