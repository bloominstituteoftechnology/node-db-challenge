
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments('project_id');

    tbl
      .string('name', 256)
      .notNullable()
      .unique()
      .defaultTo('Not Provided');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
