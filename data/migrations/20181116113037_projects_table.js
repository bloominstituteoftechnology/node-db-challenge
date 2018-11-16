// A project can contain multiple actions and has:
// - a unique Id.
// - a name.
// - a description.
// - a flag that indicates if the project is complete or not.

exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name').notNullable().unique('name');
      tbl.text('description').notNullable();
      tbl.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
