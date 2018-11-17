exports.up = function(knex, Promise) {
  // makes the changes to the database
  return knex.schema.createTable("actions", function(tbl) {
    // make changes to the table using the tbl object passed as a parameter

    // primary key
    tbl.increments(); // generate and id field and make it autoincrement and the primary key

    // other fields
    tbl.string("description", 255);
    tbl.text("notes");


    tbl.boolean("complete");
    tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects');
  });
};

exports.down = function(knex, Promise) {
  // undo the changes to the database (it's called rolling back changes)
  return knex.schema.dropTableIfExists("actions");
};

/*
An action belongs to only one project. An action has:
a unique id.
a description of what needs to be done.
a notes column to add additional information.
a flag that indicates if the action has been completed.
*/