
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function(tbl) {
      tbl.increments();

      tbl.string('name', 128).notNullable().unique('project_name');

      tbl.string('description',128).notNullable();

      tbl.boolean('complete').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project')
};
