// a unique Id.
// a name.
// a description.
// a flag that indicates if the project is complete or not.

exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', t => {
    t.increments('id');
    t
      .string('name')
      .notNullable()
      .unique();
    t.string('description').notNullable();
    t.boolean('projectCompleteFlag');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
