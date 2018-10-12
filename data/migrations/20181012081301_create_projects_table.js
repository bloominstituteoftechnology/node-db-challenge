
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    // id
    tbl.increments();

    // name of project (text, required, unique)
    tbl.string('name', 128).notNullable();
    tbl.unique('name')

    // description (text, required)
    tbl.string('description', 128).notNullable();

    // completed (boolean)
    tbl.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
