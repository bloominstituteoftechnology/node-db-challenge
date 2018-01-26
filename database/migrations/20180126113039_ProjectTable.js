
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
      tbl.increments();

      tbl
      .string('name', 125)
      .notNullable()
      .unique('name', 'uq_projects_name');

      tbl
      .text('description')
      .notNullable();

      tbl
      .boolean('completed')
      .defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.droptTableIfExists('projects');
};
