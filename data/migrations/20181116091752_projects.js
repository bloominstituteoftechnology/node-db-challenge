
exports.up = function (knex, Promise) {
  //makes changes to the database
  return knex.schema.createTable('projects', function (tbl) {
    //primary key
    tbl.increments();
    //other fields
    tbl.string('name', 120);
    tbl.string('description', 240);
    tbl.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};