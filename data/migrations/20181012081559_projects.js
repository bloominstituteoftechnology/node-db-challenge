
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(projects) {
    projects.increments(); // primary key called id

    projects.string('name', 128).notNullable(); // name field

    projects.text('description').notNullable(); // description field

    projects.boolean('completed').defaultTo(false); // field that is a flag that indicates if the project is complete or not
  });
};

exports.down = function(knex, Promise) {
   // rollback
   return knex.schema.dropTableIfExists('projects');
};
