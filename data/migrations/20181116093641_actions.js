
exports.up = function (knex, Promise) {
  //makes changes to the database
  return knex.schema.createTable('actions', function (tbl) {
    //primary key
    tbl.increments();
    //other fields
    tbl.string('description', 240);
    tbl.string('notes', 120);
    tbl.boolean('completed').defaultTo(false);
    tbl.integer('projectId').references('projects.id')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};