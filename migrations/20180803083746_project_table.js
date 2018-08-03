
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function(tbl) {
      tbl.increments();
      tbl.string('name', 50).notNullable().unique();
      tbl.text('description').notNullable();
      tbl.boolean('completed').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project')
};
