
exports.up = function(knex, Promise) {

  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments('id');
    tbl.string('name', 80)
       .unique('uq_project_name')
       .notNullable();
    tbl.text('description');
    tbl.boolean('completed')
       .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
