// A `project` can contain multiple actions and has:
//   - a unique Id.
//   - a name.
//   - a description.
//   - a flag that indicates if the project is complete or not.
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function(tbl){
    tbl.increments();
    tbl.string('name', 150).notNullable();
    tbl.text('description');
    tbl.boolean('is_completed').notNullable();

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
